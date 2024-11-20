import { Icons } from '@components/CustomIcons';

import avatar from '../components/ClientFeedback/img/avatar.png';

export const useFeedbacks = (t: (key: string) => string) => {
  const feedbacks = [
    {
      id: 0,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.feedback1'),
      icon: <Icons.Amazon />,
    },
    {
      id: 1,
      image: avatar,
      author: 'Annette Black',
      work: 'Chief Chairman of',
      company: 'Netflix',
      feedback: t('feedbacks.feedback2'),
      icon: <Icons.Netflix />,
    },
    {
      id: 2,
      image: avatar,
      author: 'Annette Black',
      work: 'Chief Chairman of',
      company: 'Youtube',
      feedback: t('feedbacks.feedback3'),
      icon: <Icons.Youtube />,
    },
    {
      id: 3,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Google',
      feedback: t('feedbacks.feedback4'),
      icon: <Icons.Google />,
    },
    {
      id: 4,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.feedback5'),
      icon: <Icons.Amazon />,
    },
  ];

  return { feedbacks };
};
