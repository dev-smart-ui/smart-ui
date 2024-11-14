import Link from 'next/link';

import { BorderGradientButton } from '@components/Button';

import styles from './socials.module.scss';

const SOCIALS = [
  { label: 'Clutch', link: 'https://clutch.com' },
  { label: 'Up Work', link: 'https:/upwork.com' },
  { label: 'Linkedin', link: 'https://linkedin.com' },
  { label: 'Behance', link: 'https://behance.com' },
];

export const Socials = () => {
  return (
    <div className={styles.wrapper}>
      {SOCIALS.map((item) => (
        <BorderGradientButton
          fullWidth
          key={item.link}
          as={Link}
          href={item.link}
          target="_blank"
          text={item.label}
          className={styles.socialBtn}
        />
      ))}
    </div>
  );
};
