import { useTranslation } from 'react-i18next';

import serviceImg1 from '../components/OurServices/img/service1.png';
import serviceImg2 from '../components/OurServices/img/service2.png';
import serviceImg3 from '../components/OurServices/img/service3.png';
import serviceImg4 from '../components/OurServices/img/service4.png';

interface HeaderInfo {
  title: {
    main: string;
    highlighted: string;
  };
}

export const useOurServices = () => {
  const { t } = useTranslation(['home', 'common']);

  const buttons = {
    ourServices: t('buttons.ourServices', { ns: 'common' }),
    learnMore: t('buttons.learnMore', { ns: 'common' }),
  };

  const headerInfo: HeaderInfo = t('ourServices', {
    returnObjects: true,
  }) as HeaderInfo;

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
