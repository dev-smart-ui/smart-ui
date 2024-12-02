'use client';

import { PageEnum } from '@app-types/enums';
import { IProjectData } from '@app-types/interfaces';

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
}

export const OurWork: FC<OurWorkProps> = ({
  data,
  page = PageEnum.Home,
  handlePageClick,
  pageCount = 1,
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
    <Section>
      <Container className={styles.content}>
        <SectionHeader
          sectionName={t('ourWork.headerInfo.sectionName')}
          title={headerInfo.title}
          subTitle={headerInfo.subtitle}
        />
        <Projects data={data} isOurWorkPage={page === PageEnum.OurWork} />
        {page === PageEnum.OurWork && (
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
    </Section>
  );
};
