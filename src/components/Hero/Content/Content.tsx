import { IHeroData } from '@app-types/interfaces';

import { FC } from 'react';

import { GradientText } from '@components/GradientText';

import styles from './content.module.scss';

interface ContentProps {
  data?: IHeroData;
}

export const Content: FC<ContentProps> = ({ data }) => {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        {data?.title?.part1}{' '}
        <GradientText colors={[data?.title?.color1, data?.title?.color2]}>
          {data?.title?.gradientPart}
        </GradientText>{' '}
        {data?.title?.part2}
      </h1>
      <p className={styles.description}>{data?.subTitle}</p>
    </div>
  );
};
