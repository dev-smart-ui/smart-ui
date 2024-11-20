import { useTranslation } from 'react-i18next';

import { Icons } from '@components/CustomIcons';

import avatar from '../components/ClientFeedback/img/avatar.png';

export const useFeedbacks = () => {
  const { t } = useTranslation(['home']);

  const feedbacks = [
    {
      id: 0,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.0.feedback'),
      icon: <Icons.Amazon />,
    },
    {
      id: 1,
      image: avatar,
      author: 'Annette Black',
      work: 'Chief Chairman of',
      company: 'Netflix',
      feedback: t('feedbacks.1.feedback'),
      icon: <Icons.Netflix />,
    },
    {
      id: 2,
      image: avatar,
      author: 'Annette Black',
      work: 'Chief Chairman of',
      company: 'Youtube',
      feedback: t('feedbacks.2.feedback'),
      icon: <Icons.Youtube />,
    },
    {
      id: 3,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Google',
      feedback: t('feedbacks.3.feedback'),
      icon: <Icons.Google />,
    },
    {
      id: 4,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.4.feedback'),
      icon: <Icons.Amazon />,
    },
  ];

  return { feedbacks };
};
