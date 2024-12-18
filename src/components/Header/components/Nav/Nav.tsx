import { IHeaderLink } from '@app-types/interfaces';
import { useLanguage } from '@context/LanguageContext';
import { scrollToElement } from '@utils/index';
import classNames from 'classnames';

import { FC, useEffect } from 'react';

import { Button } from '@components/Button';
import { NavItem } from '@components/Header/components/Nav/NavItem';

import useMediaQuery from '@hooks/useMediaQuery';
import { useMount } from '@hooks/useMount';

import styles from './nav.module.scss';

interface NavProps {
  isOpen: boolean;
  onCloseMainMenu: () => void;
  navLinks: IHeaderLink[];
  buttonLabel: string;
}

export const Nav: FC<NavProps> = ({
  isOpen,
  onCloseMainMenu,
  navLinks,
  buttonLabel,
}) => {
  const lng = useLanguage();
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const { mounted } = useMount(isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleContactUsClick = () => {
    onCloseMainMenu();
    setTimeout(() => {
      scrollToElement('contactForm');
    }, 200);
  };

  if (!isDesktop && !mounted && !isOpen) return null;

  return (
    <nav
      className={classNames(styles.wrapper, {
        [styles.isOpen]: mounted && isOpen,
      })}
    >
      <ul className={styles.navList}>
        {navLinks?.map(({ label, subMenuLinks, ...rest }) => (
          <NavItem
            lng={lng}
            key={label}
            onCloseMainMenu={onCloseMainMenu}
            submenu={subMenuLinks}
            link={{
              ...rest,
              label,
            }}
          />
        ))}
      </ul>
      <Button
        className={styles.contactUsBtnMobile}
        text={buttonLabel}
        onClick={handleContactUsClick}
      />
    </nav>
  );
};
