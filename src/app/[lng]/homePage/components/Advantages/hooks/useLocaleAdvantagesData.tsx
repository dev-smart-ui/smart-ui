import { IHeaderInfo } from '@app-types/interfaces/global';

import { useTranslation } from 'react-i18next';

import { Icons } from '@components/CustomIcons';

interface AdvantageCard {
  title: string;
  description: string;
}

export const useLocaleAdvantagesData = () => {
  const { t } = useTranslation('home');

  const headerInfo = t('advantages.headerInfo', {
    returnObjects: true,
  }) as IHeaderInfo;

  const cardsData: AdvantageCard[] = t('advantages.cardsData', {
    returnObjects: true,
  }) as AdvantageCard[];

  const cards = [
    {
      title: cardsData[0]?.title || '',
      description: cardsData[0]?.description || '',
      icon: <Icons.Stack />,
    },
    {
      title: cardsData[1]?.title || '',
      description: cardsData[1]?.description || '',
      icon: <Icons.Lifecycle />,
    },
    {
      title: cardsData[2]?.title || '',
      description: cardsData[2]?.description || '',
      icon: <Icons.Clock />,
    },
    {
      title: cardsData[3]?.title || '',
      description: cardsData[3]?.description || '',
      icon: <Icons.StarBorder />,
    },
    {
      title: cardsData[4]?.title || '',
      description: cardsData[4]?.description || '',
      icon: <Icons.Rocket />,
    },
    {
      title: cardsData[5]?.title || '',
      description: cardsData[5]?.description || '',
      icon: <Icons.Sun1 />,
    },
  ];

  return { cards, headerInfo };
};
