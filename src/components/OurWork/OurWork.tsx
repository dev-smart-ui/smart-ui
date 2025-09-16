'use client';

import { PageEnum } from '@app-types/enums';
import { IHeaderInfo } from '@app-types/global';
import { IProjectCategory, IProjectData } from '@app-types/interfaces';
import classNames from 'classnames';
import Image from 'next/image';

import { Dispatch, FC, SetStateAction } from 'react';
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
  categories?: IProjectCategory[];
  handlePageClick?: (selectedItem: { selected: number }) => void;
  pageCount?: number;
  bgImage?: string;
  headerInfo?: IHeaderInfo;
  setActiveCategory?: Dispatch<SetStateAction<string>>;
  activeCategory?: string;
}

export const OurWork: FC<OurWorkProps> = ({
  data,
  page = PageEnum.Home,
  handlePageClick,
  pageCount = 1,
  bgImage,
  headerInfo,
  categories,
  setActiveCategory,
  activeCategory,
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

      <Container className={styles.content}>
        <SectionHeader
          sectionName={headerInfo?.sectionName}
          title={headerInfo?.title}
          description={headerInfo?.description}
        />
      </Container>
      {categories && categories?.length > 0 && setActiveCategory && (
        <Container size="xl" className={styles.categoryWrapper}>
          {categories?.map((item) => (
            <button
              type="button"
              key={item.id}
              className={`${styles.category} ${item.attributes.slug === activeCategory ? styles.active : ''}`}
              disabled={item.attributes.single_projects.data.length === 0}
              onClick={() => setActiveCategory(item.attributes.slug)}
              style={{
                borderColor:
                  item.attributes.slug === activeCategory
                    ? item.attributes.color || '#31B76F'
                    : 'transparent',
              }}
            >
              <span
                className={styles.icon}
                style={{ backgroundColor: item.attributes.color || '#31B76F' }}
              >
                {item.attributes.icon && item.attributes.icon?.data && (
                  <Image
                    src={item.attributes.icon?.data?.attributes.url}
                    alt={item.attributes.slug}
                    width={20}
                    height={20}
                  />
                )}
              </span>
              <span
                className={
                  item.attributes.slug === 'all' ||
                  item.attributes.slug === 'cms' ||
                  item.attributes.slug === 'qa'
                    ? styles.uppercase
                    : ''
                }
              >
                {item.attributes.slug === 'uiux-design'
                  ? 'UI/UX Design'
                  : item.attributes.slug.replaceAll('-', ' ')}
              </span>
            </button>
          ))}
        </Container>
      )}
      <Container>
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
    </Section>
  );
};
