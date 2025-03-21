export const scrollToElement = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    const headerHeight = 80;
    const y =
      section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
    setTimeout(() => window.scrollTo({ top: y, behavior: 'smooth' }), 300);
  }
};

/* eslint-disable no-bitwise */
export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
};
