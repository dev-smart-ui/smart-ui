import { StaticImageData } from 'next/image';

export interface ISubMenuItem {
  label: string;
  path: string;
  desc: string;
  icon: StaticImageData | string;
  gridArea: string;
}

export interface ILink {
  label: string;
  submenu?: ISubMenuItem[];
  path?: string;
}
