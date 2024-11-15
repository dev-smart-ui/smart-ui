import { Icons } from '@components/CustomIcons';

export const SOCIALS = [
  {
    label: 'Linkedin',
    link: 'https://linkedin.com',
    borderColor: 'lightBlue',
    icon: <Icons.Linkedin />,
  },
  {
    label: 'Behance',
    link: 'https://behance.com',
    borderColor: 'blue',
    icon: <Icons.Behance />,
  },
  {
    label: 'Up Work',
    link: 'https://upwork.com',
    borderColor: 'green',
    icon: <Icons.Upwork />,
  },
  {
    label: 'Clutch',
    link: 'https://clutch.com',
    borderColor: 'darkGreen',
    icon: <Icons.Clutch />,
  },
] as const;
