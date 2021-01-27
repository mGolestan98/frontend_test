const customMediaQuery = (maxWidth: number) =>
  `@media (min-width: ${maxWidth}px)`;

export const desktopBreakpoint = 1200;
export const tabletBreakpoint = 768;
export const phoneBreakpoint = 375;

const media = {
  desktop: customMediaQuery(desktopBreakpoint),
  tablet: customMediaQuery(tabletBreakpoint),
  phone: customMediaQuery(phoneBreakpoint),
  print: `@media print`
};

export default media;
