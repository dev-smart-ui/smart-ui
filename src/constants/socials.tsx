import { Icons } from '@components/CustomIcons';

export const SOCIALS = [
  {
    label: 'Clutch',
    link: 'https://clutch.co/profile/smart-ui',
    borderColor: 'darkGreen',
    icon: <Icons.Clutch />,
    ariaLabel: 'Visit our profile on Clutch',
  },
  {
    label: 'Up Work',
    link: 'https://www.upwork.com/agencies/smartui',
    borderColor: 'green',
    icon: <Icons.Upwork />,
    ariaLabel: 'Check our agency on Upwork',
  },
  {
    label: 'Linkedin',
    link: 'https://www.linkedin.com/in/oleksii-hashkov',
    borderColor: 'lightBlue',
    icon: <Icons.Linkedin />,
    ariaLabel: 'Connect with Oleksii Hashkov on LinkedIn',
  },
  {
    label: 'Behance',
    link: 'https://www.behance.net/oleksiihashkov',
    borderColor: 'blue',
    icon: <Icons.Behance />,
    ariaLabel: 'View portfolio on Behance',
  },
] as const;
