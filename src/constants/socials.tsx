import { Icons } from '@components/CustomIcons';

export const SOCIALS = [
  {
    label: 'Clutch',
    link: 'https://clutch.co/profile/smart-ui',
    color: '#17313B',
    icon: <Icons.Clutch />,
    ariaLabel: 'Visit our profile on Clutch',
  },
  {
    label: 'Up Work',
    link: 'https://www.upwork.com/agencies/smartui',
    color: '#31B76F',
    icon: <Icons.Upwork />,
    ariaLabel: 'Check our agency on Upwork',
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/oleksii-hashkov',
    color: '#2865B0',
    icon: <Icons.Linkedin />,
    ariaLabel: 'Connect with Oleksii Hashkov on LinkedIn',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/oleksiihashkov',
    color: '#1255FC',
    icon: <Icons.Behance />,
    ariaLabel: 'View portfolio on Behance',
  },
] as const;
