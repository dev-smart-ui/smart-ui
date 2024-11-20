import { useTranslation } from 'react-i18next';

import briefcaseImg from '../components/WorkTogether/img/briefcase.png';
import smileImg from '../components/WorkTogether/img/smile.png';
import trophyImg from '../components/WorkTogether/img/trophy.png';
import usersImg from '../components/WorkTogether/img/users.png';

export const useWorkTogether = () => {
  const { t } = useTranslation(['home', 'common']);

  const info = {
    buttonLabel: t('buttons.getStart', { ns: 'common' }),
    title: t('workTogether.title'),
    description: t('workTogether.description'),
  };

  const cards = [
    {
      id: 1,
      icon: trophyImg,
      count: '17+',
      category: t('workTogether.cards.category1'),
      backgroundColor: '#EAF8F1',
      group: 'first',
    },
    {
      id: 2,
      icon: smileImg,
      count: '183+',
      category: t('workTogether.cards.category2'),
      backgroundColor: '#FFF4EC',
      group: 'first',
    },
    {
      id: 3,
      icon: usersImg,
      count: '23+',
      category: t('workTogether.cards.category3'),
      backgroundColor: '#F0EAF8',
      group: 'second',
    },
    {
      id: 4,
      icon: briefcaseImg,
      count: '315+',
      category: t('workTogether.cards.category4'),
      backgroundColor: '#F8F8F8',
      group: 'second',
    },
  ];

  return { cards, info };
};
