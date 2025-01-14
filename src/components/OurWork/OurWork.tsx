'use client';

import { PageEnum } from '@app-types/enums';
import { IHeaderInfo } from '@app-types/global';
import { IProjectData } from '@app-types/interfaces';
import classNames from 'classnames';
import Image from 'next/image';

import { FC } from 'react';
import ReactPaginate from 'react-paginate';

import { Container } from '@components/Container';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';

import useMediaQuery from '@hooks/useMediaQuery';

import { Projects } from './Projects';
import styles from './ourWork.module.scss';

interface OurWorkProps {
  data?: IProjectData[];
  page?: string;
  handlePageClick?: (selectedItem: { selected: number }) => void;
  pageCount?: number;
  bgImage?: string;
  headerInfo?: IHeaderInfo;
}

export const OurWork: FC<OurWorkProps> = ({
  data,
  page = PageEnum.Home,
  handlePageClick,
  pageCount = 1,
  bgImage,
  headerInfo,
}) => {
  const isOurWorkPage = page === PageEnum.OurWork;
  const isProjectDetailPage = page === PageEnum.ProjectDetail;
  const isTabletAndDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <Section
      className={classNames(styles.section, {
        [styles.isOurWorkPage]: page === PageEnum.OurWork,
      })}
    >
      <Container className={styles.content}>
        <SectionHeader
          sectionName={headerInfo?.sectionName}
          title={headerInfo?.title}
          description={headerInfo?.description}
        />
        <Projects id="projects" data={data} page={page} />
        {(isOurWorkPage || isProjectDetailPage) && data && data?.length > 0 && (
          <ReactPaginate
            className={styles.pagination}
            pageClassName={styles.page}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            marginPagesDisplayed={isTabletAndDesktop ? 3 : 1}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        )}
      </Container>
      {bgImage && (
        <div className={styles.topBgImage}>
          <Image
            src={bgImage ?? ''}
            width={1920}
            height={600}
            alt="backgraundImage"
          />
        </div>
      )}
    </Section>
  );
};
