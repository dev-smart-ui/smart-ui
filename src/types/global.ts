import { IGradientTitle, IImage } from '@app-types/interfaces';

export interface IHeaderInfo {
  topBgImage?: IImage;
  sectionName?: string;
  title: IGradientTitle;
  description?: string;
}

interface Calendly {
  initInlineWidget(options: {
    url: string;
    parentElement: HTMLElement | null;
  }): void;
}

declare global {
  interface Window {
    Calendly?: Calendly;
  }
}
