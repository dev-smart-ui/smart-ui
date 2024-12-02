import { IHeaderInfo } from '@app-types/global';

import { useTranslation } from 'react-i18next';

export const useLocaleAccordionData = () => {
  const { t } = useTranslation('home');

  const headerInfo = t('accordion.headerInfo', {
    returnObjects: true,
  }) as IHeaderInfo;

  const accordionData = [
    {
      id: 1,
      label: t('accordion.question1.label'),
      hidedText: t('accordion.question1.hidedText'),
    },
    {
      id: 2,
      label: t('accordion.question2.label'),
      hidedText: t('accordion.question2.hidedText'),
    },
    {
      id: 3,
      label: t('accordion.question3.label'),
      hidedText: t('accordion.question3.hidedText'),
    },
    {
      id: 4,
      label: t('accordion.question4.label'),
      hidedText: t('accordion.question4.hidedText'),
    },
    {
      id: 5,
      label: t('accordion.question5.label'),
      hidedText: t('accordion.question5.hidedText'),
    },
    {
      id: 6,
      label: t('accordion.question6.label'),
      hidedText: t('accordion.question6.hidedText'),
    },
  ];

  return { accordionData, headerInfo };
};
