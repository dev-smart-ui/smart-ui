import { IImage } from '@app-types/interfaces';
import { scrollToElement } from '@utils/index';

import { FC } from 'react';

import { Button } from '@components/Button';

import styles from './info.module.scss';

interface InfoProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonIcon: IImage;
}

export const Info: FC<InfoProps> = ({
  title,
  description,
  buttonLabel,
  buttonIcon,
}) => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button
        onClick={() => scrollToElement('contactForm')}
        text={buttonLabel}
        icon={buttonIcon?.data?.attributes?.url}
      />
    </div>
  );
};
