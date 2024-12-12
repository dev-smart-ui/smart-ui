import { scrollToElement } from '@utils/index';

import { FC } from 'react';

import { Button } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './info.module.scss';

interface InfoProps {
  title: string;
  description: string;
  buttonLabel: string;
}

export const Info: FC<InfoProps> = ({ title, description, buttonLabel }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button
        onClick={() => scrollToElement('contactForm')}
        text={buttonLabel}
        icon={<Icons.ArrowRight fill="white" />}
      />
    </div>
  );
};
