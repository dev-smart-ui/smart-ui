import { FormValues } from '@app-types/interfaces';
import axios from 'axios';

import { toast } from 'react-toastify';

import { API, sendTelegram } from './api';

const sendDataToStrapi = async (
  formData: {
    type: string;
    data_message: FormValues;
  },
  type: string,
) => {
  const dataToString = JSON.stringify(formData).split(',').join('\n');

  return axios
    .post(API.CONTACT_FORM, { data: formData })
    .catch((e) => {
      toast.error('Something went wrong. Please, try again!', {
        theme: 'colored',
      });
      throw e;
    })
    .then((response) => {
      if (response?.status === 200) {
        sendTelegram({ type, dataToString });
      }
      return response;
    });
};
export const sendForm = ({
  type,
  data,
}: {
  type: string;
  data: FormValues;
}) => {
  const validatedData = JSON.parse(JSON.stringify(data));

  const formData = {
    data_message: validatedData,
    type,
  };
  return sendDataToStrapi(formData, type);
};
