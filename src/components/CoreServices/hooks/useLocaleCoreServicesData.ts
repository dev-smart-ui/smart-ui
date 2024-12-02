import { IBottomBlock, IHeaderInfo } from '@app-types/global';

import { useTranslation } from 'react-i18next';

import img from '../img/img.png';

export const useLocaleServicesData = (page?: string) => {
  const { t } = useTranslation([page, 'common']);

  const headerInfo = t('coreServices.headerInfo', {
    returnObjects: true,
  }) as IHeaderInfo;

  const bottomBlock = {
    title: t('coreServices.bottomBlock.title'),
    description: t('coreServices.bottomBlock.description'),
    buttonLabel: t('buttons.getInTouch', { ns: 'common' }),
  } as IBottomBlock;

  const coreServicesData = [
    {
      id: 1,
      image: img,
      title: t('coreServices.coreService1.title'),
      description: t('coreServices.coreService1.description'),
    },
    {
      id: 2,
      image: img,
      title: t('coreServices.coreService2.title'),
      description: t('coreServices.coreService2.description'),
    },
    {
      id: 3,
      image: img,
      title: t('coreServices.coreService3.title'),
      description: t('coreServices.coreService3.description'),
    },
    {
      id: 4,
      image: img,
      title: t('coreServices.coreService4.title'),
      description: t('coreServices.coreService4.description'),
    },
    {
      id: 5,
      image: img,
      title: t('coreServices.coreService5.title'),
      description: t('coreServices.coreService5.description'),
    },
    {
      id: 6,
      image: img,
      title: t('coreServices.coreService6.title'),
      description: t('coreServices.coreService6.description'),
    },
    {
      id: 7,
      image: img,
      title: t('coreServices.coreService7.title'),
      description: t('coreServices.coreService7.description'),
    },
    {
      id: 8,
      image: img,
      title: t('coreServices.coreService8.title'),
      description: t('coreServices.coreService8.description'),
    },
    {
      id: 9,
      image: img,
      title: t('coreServices.coreService9.title'),
      description: t('coreServices.coreService9.description'),
    },
    {
      id: 10,
      image: img,
      title: t('coreServices.coreService10.title'),
      description: t('coreServices.coreService10.description'),
    },
  ];

  return { coreServicesData, headerInfo, bottomBlock };
};
