import { IHeaderInfo } from '@app-types/global';

import { useTranslation } from 'react-i18next';

import serviceImg1 from '../img/service1.png';
import serviceImg2 from '../img/service2.png';
import serviceImg3 from '../img/service3.png';
import serviceImg4 from '../img/service4.png';

export const useLocaleOurServicesData = () => {
  const { t } = useTranslation(['home', 'common']);

  const buttons = {
    learnMore: t('buttons.learnMore', { ns: 'common' }),
  };

  const headerInfo = t('ourServices.headerInfo', {
    returnObjects: true,
  }) as IHeaderInfo;

  const services = [
    {
      title: t('ourServices.service1.title'),
      description: t('ourServices.service1.description'),
      image: serviceImg1,
      area: 'service1',
    },
    {
      title: t('ourServices.service2.title'),
      description: t('ourServices.service2.description'),
      image: serviceImg2,
      area: 'service2',
    },
    {
      title: t('ourServices.service3.title'),
      description: t('ourServices.service3.description'),
      image: serviceImg3,
      area: 'service3',
    },
    {
      title: t('ourServices.service4.title'),
      description: t('ourServices.service4.description'),
      image: serviceImg4,
      area: 'service4',
    },
  ];

  return { services, headerInfo, buttons };
};
