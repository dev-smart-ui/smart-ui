import Script from 'next/script';

import { FC } from 'react';

import { Section } from '@components/Section';

import styles from './calendlyWidget.module.scss';

interface CalendlyWidgetProps {
  url?: string;
}

export const CalendlyWidget: FC<CalendlyWidgetProps> = ({
  url = 'https://calendly.com/gashkov321',
}) => {
  return (
    <Section className={styles.wrapper}>
      <div
        className={`calendly-inline-widget ${styles.calendlyWrapper}`}
        data-url={url}
      />
      <Script
        type="text/javascript"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        async
      />
    </Section>
  );
};
