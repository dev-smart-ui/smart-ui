// const  endpoint = "http://localhost:1337/api/";
import axios from 'axios';

const endpoint = 'https://strapi-smart-ui.smart-ui.pro/api/';

export const API = {
  CONTACT_FORM: `${endpoint}contact-messages`,
};

export const sendTelegram = ({
  type,
  dataToString,
}: {
  type: string;
  dataToString: string;
}) => {
  const token = '5635328377:AAEsfxhnKH-VaO8oU-nPmXIBTb3ODcZcRO4';
  const TELEGRAM = {
    chatId: '-639134844',
    uri: `https://api.telegram.org/bot${token}/sendMessage`,
  };
  axios
    .post(TELEGRAM.uri, {
      chat_id: TELEGRAM.chatId,
      parse_mode: 'html',
      text: `<b>${type}</b>.\n\n${dataToString}`,
    })
    /* eslint-disable no-console */
    .catch((e) => console.log(e))
    .then(() => {
      /* eslint-disable no-console */
      console.log('was sent to telegram ');
    });
};
