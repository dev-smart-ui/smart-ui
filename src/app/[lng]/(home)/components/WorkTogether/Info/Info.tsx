import { scrollToElement } from '@utils/index';

import { FC } from 'react';

import { Button } from '@components/Button';
import { Icons } from '@components/CustomIcons';

import styles from './info.module.scss';

interface InfoProps {
  info: {
    title: string;
    description: string;
    buttonLabel: string;
  };
}

export const Info: FC<InfoProps> = ({ info }) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{info.title}</h2>
      <p className={styles.description}>{info.description}</p>
      <Button
        onClick={() => scrollToElement('contactForm')}
        text={info.buttonLabel}
        icon={<Icons.ArrowRight fill="white" />}
      />
    </div>
  );
};
