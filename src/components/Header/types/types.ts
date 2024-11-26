import { StaticImageData } from 'next/image';

interface ISubMenuItem {
  label: string;
  path: string;
  desc: string;
  icon: StaticImageData | string;
}

export interface ISubMenu {
  firstColumn: ISubMenuItem[];
  secondColumn: ISubMenuItem[];
  lastColumn: ISubMenuItem[];
}

export interface ILink {
  label: string;
  submenu?: ISubMenu;
  path?: string;
}
