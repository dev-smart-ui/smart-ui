import classNames from 'classnames';

import { FC } from 'react';

import { GradientText } from '@components/GradientText';
import { TextGradientBackground } from '@components/TextGradientBackgraund';

import styles from './sectionHeader.module.scss';

interface ITitleObj {
  part1: string;
  part2?: string;
  gradientPart?: string;
  color1?: string;
  color2?: string;
}

interface SectionHeaderProps {
  sectionName?: string;
  title?: ITitleObj | string;
  description?: string;
  position?: 'left' | 'center' | 'right';
  className?: string;
}

export const SectionHeader: FC<SectionHeaderProps> = ({
  sectionName,
  title,
  description,
  position = 'center',
  className,
}) => {
  const isTitleObject = (value: ITitleObj | string): value is ITitleObj => {
    return typeof value === 'object';
  };

  return (
    <div
      className={classNames(
        styles.wrapper,
        styles[`${position}Position`],
        className ?? '',
      )}
    >
      <div className={styles.titleWrapper}>
        {!!sectionName && (
          <TextGradientBackground className={styles.sectionName}>
            {sectionName}
          </TextGradientBackground>
        )}
        {!!title && (
          <h2 className={styles.title}>
            {isTitleObject(title) ? (
              <>
                {title?.part1}{' '}
                <GradientText
                  colors={[
                    title?.color1 || '#2865B0',
                    title?.color2 || '#3B8FF3',
                  ]}
                >
                  {title.gradientPart}
                </GradientText>{' '}
                {title?.part2 ? title?.part2 : ''}{' '}
              </>
            ) : (
              title
            )}
          </h2>
        )}
      </div>
      {!!description && <p className={styles.subTitle}>{description}</p>}
    </div>
  );
};
