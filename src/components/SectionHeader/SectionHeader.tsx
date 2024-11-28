import classNames from 'classnames';

import { FC } from 'react';

import { GradientText } from '@components/GradientText';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import styles from './sectionHeader.module.scss';

type TTitleObj = {
  main: string;
  highlighted: string;
  secondary?: string;
};

interface SectionHeaderProps {
  sectionName?: string;
  title?: TTitleObj | string;
  subTitle?: string;
  position?: 'left' | 'center' | 'right';
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  sectionName,
  title,
  subTitle,
  position = 'center',
}) => {
  const isTitleObject = (value: TTitleObj | string): value is TTitleObj => {
    return (
      typeof value === 'object' && 'main' in value && 'highlighted' in value
    );
  };

  return (
    <div className={classNames(styles.wrapper, styles[`${position}Position`])}>
      {!!sectionName && (
        <TextGradientBackground className={styles.sectionName}>
          {sectionName}
        </TextGradientBackground>
      )}
      {!!title && (
        <h2 className={styles.title}>
          {isTitleObject(title) ? (
            <>
              {title.main}{' '}
              <GradientText color="Secondary">{title.highlighted}</GradientText>
              {title.secondary ? title.secondary : ''}{' '}
            </>
          ) : (
            title
          )}
        </h2>
      )}
      {subTitle && <p className={styles.subTitle}>{subTitle}</p>}
    </div>
  );
};
