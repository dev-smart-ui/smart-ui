'use client';

import Script from 'next/script';

import { FC, useEffect, useRef } from 'react';

import { Section } from '@components/Section';

import styles from './calendlyWidget.module.scss';

interface CalendlyWidgetProps {
  url?: string;
}

export const CalendlyWidget: FC<CalendlyWidgetProps> = ({
  url = 'https://calendly.com/gashkov321',
}) => {
  const widgetInitialized = useRef(false);

  useEffect(() => {
    if (widgetInitialized.current) return;

    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: document.querySelector(`.${styles.calendlyWrapper}`),
      });
      widgetInitialized.current = true;
    }

    const handleScriptLoad = () => {
      if (!widgetInitialized.current && window.Calendly) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: document.querySelector(`.${styles.calendlyWrapper}`),
        });
        widgetInitialized.current = true;
      }
    };

    window.addEventListener('load', handleScriptLoad);
    // eslint-disable-next-line consistent-return
    return () => window.removeEventListener('load', handleScriptLoad);
  }, [url]);

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
