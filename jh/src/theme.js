const baseTheme = {
  primary: 'rgb(72, 52, 212)',
  secondary: 'rgb(104, 109, 224)',
  danger: 'rgb(235, 77, 75)',
  success: 'rgb(106, 176, 76)',
  warning: 'rgb(249, 202, 36)',
  info: 'rgb(34, 166, 179)',
  black: 'rgb(0, 0, 0)',
  darkGrey: 'rgb(100, 100, 100)',
  grey: 'rgb(200, 200, 200)',
  lightGrey: 'rgb(244,248,250)',
  white: 'rgb(255, 255, 255)',
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  flexa: {
    columns: 12,
    gutter: {
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2
    },
    breakpoints: {
      xs: 0,
      sm: 30,
      md: 48,
      lg: 60
    }
  }
};

export const lightTheme = {
  background: 'rgb(244,248,250)',
  text: '#000',
  ...baseTheme
};

export const darkTheme = {
  background: '#000',
  text: '#fff',
  ...baseTheme
};
