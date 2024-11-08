interface ISubMenu {
  label: string;
  path: string;
}

export interface ILink {
  label: string;
  submenu?: ISubMenu[];
  path?: string;
}
