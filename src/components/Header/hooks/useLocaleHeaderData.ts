import { ROUTES } from '@routes/index';

import { useTranslation } from 'react-i18next';

import servicesImg1 from '../img/servicesMenuIcon1.png';
import servicesImg2 from '../img/servicesMenuIcon2.png';
import servicesImg3 from '../img/servicesMenuIcon3.png';
import servicesImg4 from '../img/servicesMenuIcon4.png';
import servicesImg5 from '../img/servicesMenuIcon5.png';
import servicesImg6 from '../img/servicesMenuIcon6.png';
import servicesImg7 from '../img/servicesMenuIcon7.png';

export const useLocaleHeaderData = () => {
  const { t, i18n } = useTranslation(['header', 'common']);
  const lng = i18n.language;

  const buttonLabel = t('buttons.contact', { ns: 'common' });

  const navLinks = [
    { label: t('home'), path: `/${lng}${ROUTES.HOME}` },
    {
      label: t('services'),
      submenu: {
        firstColumn: [
          {
            icon: servicesImg1,
            label: t('submenuServices.link1.title'),
            desc: t('submenuServices.link1.description'),
            path: '',
          },
          {
            icon: servicesImg2,
            label: t('submenuServices.link2.title'),
            desc: t('submenuServices.link2.description'),
            path: `/${lng}${ROUTES.CMS_SERVICE}`,
          },
          {
            icon: servicesImg3,
            label: t('submenuServices.link3.title'),
            desc: t('submenuServices.link3.description'),
            path: '',
          },
        ],
        secondColumn: [
          {
            icon: servicesImg4,
            label: t('submenuServices.link4.title'),
            desc: t('submenuServices.link4.description'),
            path: '',
          },
          {
            icon: servicesImg5,
            label: t('submenuServices.link5.title'),
            desc: t('submenuServices.link5.description'),
            path: '',
          },
          {
            icon: servicesImg6,
            label: t('submenuServices.link6.title'),
            desc: t('submenuServices.link6.description'),
            path: '',
          },
        ],
        lastColumn: [
          {
            icon: servicesImg7,
            label: t('submenuServices.link7.title'),
            desc: t('submenuServices.link7.description'),
            path: '',
          },
        ],
      },
    },
    { label: t('ourWork'), path: `/${lng}${ROUTES.OUR_WORK}` },
    { label: t('aboutUs'), path: `/${lng}${ROUTES.ABOUT_US}` },
  ];

  return { lng, navLinks, buttonLabel };
};
