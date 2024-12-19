'use client';

import { PageEnum } from '@app-types/enums';
import { IHeaderInfo } from '@app-types/global';
import { IProjectData } from '@app-types/interfaces';
import { PROJECTS_QUERY } from '@graphqlQueries/ProjectsQuery';
import { fetchGraphQL } from '@lib/fetchGraphQL';

import { FC, useEffect, useRef, useState } from 'react';

import { OurWork } from '@components/OurWork';

interface OurWorkWrapperProps {
  headerInfo: IHeaderInfo;
  lng: string;
  bgImage: string;
}

export const OurWorkWrapper: FC<OurWorkWrapperProps> = ({
  headerInfo,
  lng,
  bgImage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageCountRef = useRef<number | null>(null);
  const [data, setData] = useState<IProjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { singleProjects } = await fetchGraphQL(PROJECTS_QUERY, {
        locale: lng,
        pagination: { page: currentPage, pageSize: 10 },
      });

      const pageCount = singleProjects?.meta?.pagination?.pageCount;

      if (!singleProjects?.data) {
        return;
      }

      setData(singleProjects.data || []);
      pageCountRef.current = pageCount;
    };

    fetchData().then();
  }, [currentPage, lng]);

  const handlePageClick = (selectedItem: { selected: number }) => {
    setCurrentPage(selectedItem.selected + 1);
  };

  return (
    <OurWork
      data={data}
      headerInfo={headerInfo}
      page={PageEnum.OurWork}
      handlePageClick={handlePageClick}
      pageCount={pageCountRef.current ?? 1}
      bgImage={bgImage}
    />
  );
};
