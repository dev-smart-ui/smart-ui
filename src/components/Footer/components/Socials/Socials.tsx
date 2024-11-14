import Link from 'next/link';

import { BorderGradientButton } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './socials.module.scss';

const SOCIALS = [
  {
    label: 'Clutch',
    link: 'https://clutch.com',
    borderColor: 'darkGreen',
    icon: <Icons.Clutch />,
  },
  {
    label: 'Up Work',
    link: 'https:/upwork.com',
    borderColor: 'green',
    icon: <Icons.Upwork />,
  },
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
] as const;

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {SOCIALS.map((item) => (
        <BorderGradientButton
          fullWidth
          isIconSeparated
          key={item.link}
          as={Link}
          href={item.link}
          target="_blank"
          text={item.label}
          className={styles.socialBtn}
          borderColorType={item.borderColor}
          icon={item.icon}
        />
      ))}
    </div>
  );
};
