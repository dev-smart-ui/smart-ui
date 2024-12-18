import { ILegalNavItem } from '@app-types/interfaces';
import classNames from 'classnames';
import Link from 'next/link';

import React, { ChangeEvent, FC, useState } from 'react';
import Select from 'react-select';

import styles from './nav.module.scss';

interface NavProps {
  data: ILegalNavItem[];
}

export const Nav: FC<NavProps> = ({ data }) => {
  const [activeNav, setActiveNav] = useState(data[0]?.itemId || '');
  const headerHeight = 80;

  const smoothScroll = (elementId: string, offset: number) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset + window.pageYOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  type EventType =
    | React.MouseEvent<HTMLAnchorElement>
    | React.ChangeEvent<{ value: string }>;

  const handleAnchorClick = (event: EventType, id: string) => {
    if ('preventDefault' in event) {
      event.preventDefault();
    }
    smoothScroll(id, headerHeight);
    setActiveNav(id);
  };

  const options = data?.map((item) => ({
    value: item?.itemId,
    label: item?.text,
  }));

  return (
    <>
      <Select
        isSearchable={false}
        options={options}
        onChange={(option) =>
          handleAnchorClick(
            {} as ChangeEvent<{ value: string }>,
            option?.value || '',
          )
        }
        value={options.find((option) => option.value === activeNav)}
        classNamePrefix="custom-select"
        className={styles.mobileSelect}
      />
      <ul className={styles.wrapper}>
        {data?.map((navItem) => (
          <li
            key={navItem?.itemId}
            className={classNames(styles.item, {
              [styles.active]: activeNav === navItem?.itemId,
            })}
          >
            <Link
              href={`#${navItem?.itemId}`}
              onClick={(e) => handleAnchorClick(e, navItem?.itemId)}
            >
              {navItem?.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
