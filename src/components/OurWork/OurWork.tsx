'use client';

import { PageEnum } from '@app-types/enums';
import { IProjectData } from '@app-types/interfaces';
import classNames from 'classnames';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import ReactPaginate from 'react-paginate';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import { Projects } from './Projects';
import styles from './ourWork.module.scss';

interface OurWorkProps {
  data?: IProjectData[];
  page?: string;
  handlePageClick?: (selectedItem: { selected: number }) => void;
  pageCount?: number;
  bgImage?: StaticImageData;
  isLoading?: boolean;
}

export const OurWork: FC<OurWorkProps> = ({
  data,
  page = PageEnum.Home,
  handlePageClick,
  pageCount = 1,
  bgImage,
  isLoading,
}) => {
  const { t } = useTranslation(page);

  const headerInfo = {
    title: {
      main: t('ourWork.headerInfo.title.main'),
      highlighted: t('ourWork.headerInfo.title.highlighted'),
    },
    subtitle: t('ourWork.headerInfo.subTitle'),
  };

  return (
    <Section
      className={classNames(styles.section, {
        [styles.isOurWorkPage]: page === PageEnum.OurWork,
      })}
    >
      <Container className={styles.content}>
        <SectionHeader
          sectionName={t('ourWork.headerInfo.sectionName')}
          title={headerInfo.title}
          subTitle={headerInfo.subtitle}
        />
        {isLoading ? (
          <div>..loading</div>
        ) : (
          <Projects data={data} isOurWorkPage={page === PageEnum.OurWork} />
        )}
        {page === PageEnum.OurWork && data && data?.length > 0 && (
          <ReactPaginate
            className={styles.pagination}
            pageClassName={styles.page}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        )}
      </Container>
      {bgImage && (
        <div className={styles.topBgImage}>
          <Image src={bgImage} alt="backgraundImage" />
        </div>
      )}
    </Section>
  );
};
