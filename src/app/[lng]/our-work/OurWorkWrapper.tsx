'use client';

import { PageEnum } from '@app-types/enums';
import { IProjectData } from '@app-types/interfaces';
import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { FC, useEffect, useRef, useState } from 'react';

import { OurWork } from '@components/OurWork';

export const OurWorkWrapper: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCountRef = useRef<number | null>(null);
  const [data, setData] = useState<IProjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
        locale: 'en',
        pagination: { page: currentPage, pageSize: 10 },
      });
      const pageCount = singleProjects?.meta?.pagination?.pageCount;

      setData(singleProjects?.data || []);
      pageCountRef.current = pageCount;
    };

    fetchData();
  }, [currentPage]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  return (
    <OurWork
      data={data}
      page={PageEnum.OurWork}
      handlePageClick={handlePageClick}
      pageCount={pageCountRef.current ?? 1}
    />
  );
};
