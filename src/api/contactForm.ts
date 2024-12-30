import { FormValues } from '@app-types/interfaces';
import axios from 'axios';

import { toast } from 'react-toastify';

import { API, sendTelegram } from './api';

const sendDataToStrapi = async (formData: {
  type: string;
  data_message: FormValues;
}) => {
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
        toast.success('Message sent successfully', { theme: 'dark' });
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
  const dataToString = JSON.stringify(data).split(',').join('\n');
  sendTelegram({ type, dataToString });
  return sendDataToStrapi(formData);
};
