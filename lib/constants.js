export const BREAKPOINTS = {
  phoneMax: 550,
  tabletMax: 1100,
  laptopMax: 1500,
}

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
}

export const COLORS = {
  gray: {
    100: 'hsl(185deg 5% 95%)',
    200: 'hsl(188deg 5% 87%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  white: 'hsl(0deg 0% 100%)',
  black: 'hsl(0deg 0% 0%)',
  primary: 'hsl(340deg 88% 57%)',
  secondary: 'hsl(240deg 60% 63%)',
}

export const WEIGHTS = {
  thin: 300,
  normal: 500,
  medium: 600,
  bold: 800,
}
