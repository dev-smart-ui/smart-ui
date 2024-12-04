import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { ConnectWith } from '@components/ConnectWith';
import { FormWrapper } from '@components/ContactForm/FormWrapper';
import { Icons } from '@components/CustomIcons';

import styles from './contactBlock.module.scss';

export const ContactBlock: FC = () => {
  const { t } = useTranslation(['home', 'contactUs']);

  const contactInfo = [
    {
      icon: <Icons.Phone2 />,
      label: t('contactBlock.contact1.label', { ns: 'contactUs' }),
      text: '+3 4634 839 752  ',
    },
    {
      icon: <Icons.Email2 />,
      label: t('contactBlock.contact2.label', { ns: 'contactUs' }),
      text: 'info@smart-ui.pro  ',
    },
    {
      icon: <Icons.InfoLocation2 />,
      label: t('contactBlock.contact3.label', { ns: 'contactUs' }),
      text: 'Spain, Badajos, calle Espronceda 7, 06470',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <ul className={styles.itemsList}>
          {contactInfo.map((item) => (
            <li key={item.label} className={styles.item}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.textWrapper}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.text}>{item.text}</span>
              </div>
            </li>
          ))}
        </ul>
        <ConnectWith className={styles.socialButtonsWrapper} />
      </div>
      <FormWrapper className={styles.formWrapper} t={t} />
    </div>
  );
};
