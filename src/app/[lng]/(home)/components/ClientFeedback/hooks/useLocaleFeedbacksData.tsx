import { Icons } from '@components/CustomIcons';

import avatar from '../img/avatar.png';

export const useLocaleFeedbacksData = (t: (key: string) => string) => {
  const feedbacks = [
    {
      id: 1,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.feedback1'),
      icon: <Icons.Amazon />,
    },
    {
      id: 2,
      image: avatar,
      author: 'Annette Black',
      work: 'Chief Chairman of',
      company: 'Netflix',
      feedback: t('feedbacks.feedback2'),
      icon: <Icons.Netflix />,
    },
    {
      id: 3,
      image: avatar,
      author: 'Annette Black',
      work: 'Chief Chairman of',
      company: 'Youtube',
      feedback: t('feedbacks.feedback3'),
      icon: <Icons.Youtube />,
    },
    {
      id: 4,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Google',
      feedback: t('feedbacks.feedback4'),
      icon: <Icons.Google />,
    },
    {
      id: 5,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.feedback5'),
      icon: <Icons.Amazon />,
    },
    {
      id: 6,
      image: avatar,
      author: 'Annette Black',
      work: 'CEO of',
      company: 'Notion',
      feedback: t('feedbacks.feedback5'),
      icon: <Icons.Amazon />,
    },
    {
      id: 7,
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
