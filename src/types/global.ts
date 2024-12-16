import { IGradientTitle, IImage } from '@app-types/interfaces';

export interface IHeaderInfo {
  topBgImage?: IImage;
  sectionName?: string;
  title: IGradientTitle;
  subTitle: string;
}

export interface IBottomBlock {
  title: string;
  description: string;
  buttonLabel: string;
}
