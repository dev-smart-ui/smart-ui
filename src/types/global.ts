export interface IHeaderInfo {
  sectionName?: string;
  title: {
    part1: string;
    gradientPart?: string;
    part2?: string;
    color1?: string;
    color2?: string;
  };
  subTitle: string;
}

export interface IBottomBlock {
  title: string;
  description: string;
  buttonLabel: string;
}
