import { Icons } from '@components/CustomIcons';

export const SOCIALS = [
  {
    label: 'Clutch',
    link: 'https://clutch.co/profile/smart-ui',
    borderColor: 'darkGreen',
    icon: <Icons.Clutch />,
  },
  {
    label: 'Up Work',
    link: 'https://www.upwork.com/agencies/smartui',
    borderColor: 'green',
    icon: <Icons.Upwork />,
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/oleksii-hashkov',
    borderColor: 'lightBlue',
    icon: <Icons.Linkedin />,
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/oleksiihashkov',
    borderColor: 'blue',
    icon: <Icons.Behance />,
  },
] as const;
