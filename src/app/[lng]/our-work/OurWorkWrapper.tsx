'use client';

import { PageEnum } from '@app-types/enums';
import { IHeaderInfo } from '@app-types/global';
import { IProjectCategory, IProjectData } from '@app-types/interfaces';
import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { CATEGORIES_QUERY } from '@graphqlQueries/categoryQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';
import { scrollToElement } from '@utils/index';

import { FC, useEffect, useRef, useState } from 'react';

import { OurWork } from '@components/OurWork';

import useScrollToTop from '@hooks/useScrollTop';

interface OurWorkWrapperProps {
  headerInfo: IHeaderInfo;
  lng: string;
  bgImage?: string;
  page?: string;
  pagSize?: number;
}

export const OurWorkWrapper: FC<OurWorkWrapperProps> = ({
  headerInfo,
  lng,
  bgImage,
  page = PageEnum.OurWork,
  pagSize = 10,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCountRef = useRef<number | null>(null);
  const [data, setData] = useState<IProjectData[]>([]);
  const [categories, setCategories] = useState<IProjectCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('1');
  const didFetch = useRef(false);
  // scroll to top after clicking the browser's back button from other pages or refreshing the current page
  useScrollToTop();

  useEffect(() => {
    const fetchData = async () => {
      const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
        locale: lng,
        pagination: { page: currentPage, pageSize: pagSize },
        filters: { project_categories: { id: { eq: Number(activeCategory) } } },
      });

      const pageCount = singleProjects?.meta?.pagination?.pageCount;

      if (!singleProjects?.data) {
        return;
      }

      setData(singleProjects.data || []);
      pageCountRef.current = pageCount;
    };

    fetchData().then();
  }, [currentPage, lng, pagSize, activeCategory]);

  const fetchCategories = async () => {
    const { projectCategories } = await fetchGraphQL(CATEGORIES_QUERY, {
      locale: lng,
    });
    if (!projectCategories?.data) {
      return;
    }
    setCategories(projectCategories.data || []);
    didFetch.current = false;
  };

  useEffect(() => {
    if (!didFetch.current && categories.length === 0) {
      didFetch.current = true;
      fetchCategories().then();
    }
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
    scrollToElement('projects');
  };

  return (
    <OurWork
      setActiveCategory={setActiveCategory}
      activeCategory={activeCategory}
      data={data}
      categories={categories}
      headerInfo={headerInfo}
      page={page}
      handlePageClick={handlePageClick}
      pageCount={pageCountRef.current ?? 1}
      bgImage={bgImage}
    />
  );
};
