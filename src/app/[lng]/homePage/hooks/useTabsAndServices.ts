import { useTranslation } from 'react-i18next';

import image1 from '../components/ServicesTabs/img/image1.png';
import image2 from '../components/ServicesTabs/img/image2.png';
import image3 from '../components/ServicesTabs/img/image3.png';
import image4 from '../components/ServicesTabs/img/image4.png';
import image5 from '../components/ServicesTabs/img/image5.png';
import image6 from '../components/ServicesTabs/img/image6.png';

export const useTabsAndServices = () => {
  const { t } = useTranslation('home');

  const tabs = [
    {
      label: t('services.tabs.softwareDevelopment'),
      value: 'softwareDevelopment',
    },
    { label: t('services.tabs.uiUxDesign'), value: 'uiUxDesign' },
    { label: t('services.tabs.webDevelopment'), value: 'webDevelopment' },
    {
      label: t('services.tabs.mobileAppDevelopment'),
      value: 'mobileAppDevelopment',
    },
    { label: t('services.tabs.cloudIntegration'), value: 'cloudIntegration' },
    { label: t('services.tabs.dataAnalytics'), value: 'dataAnalytics' },
  ];

  const servicesTabs = {
    softwareDevelopment: {
      title: t('services.content.softwareDevelopment.title'),
      list: t('services.content.softwareDevelopment.list', {
        returnObjects: true,
      }) as string[],
      image: image1,
    },
    uiUxDesign: {
      title: t('services.content.uiUxDesign.title'),
      list: t('services.content.uiUxDesign.list', {
        returnObjects: true,
      }) as string[],
      image: image2,
    },
    webDevelopment: {
      title: t('services.content.webDevelopment.title'),
      list: t('services.content.webDevelopment.list', {
        returnObjects: true,
      }) as string[],
      image: image3,
    },
    mobileAppDevelopment: {
      title: t('services.content.mobileAppDevelopment.title'),
      list: t('services.content.mobileAppDevelopment.list', {
        returnObjects: true,
      }) as string[],
      image: image4,
    },
    cloudIntegration: {
      title: t('services.content.cloudIntegration.title'),
      list: t('services.content.cloudIntegration.list', {
        returnObjects: true,
      }) as string[],
      image: image5,
    },
    dataAnalytics: {
      title: t('services.content.dataAnalytics.title'),
      list: t('services.content.dataAnalytics.list', {
        returnObjects: true,
      }) as string[],
      image: image6,
    },
  };

  return { tabs, servicesTabs };
};
