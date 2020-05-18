const baseTheme = {
  primary: "rgb(72, 52, 212)",
  secondary: "rgb(104, 109, 224)",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  flexa: {
    columns: 12,
    gutter: {
      xs: 1,
      sm: 1,
      md: 2,
      lg: 2,
    },
    breakpoints: {
      xs: 0,
      sm: 30,
      md: 48,
      lg: 60,
    },
  },
};

export const lightTheme = {
  background: "rgb(244,248,250)",
  card: "#fff",
  text: "#333",
  textAlternate: "#fff",
  highlight: "#000",
  textHighlight: "#000",
  boxShadow: "1px 1px 5px rgb(204, 204, 204)",
  cardTitle: "#dbe1e8",
  border: "1px solid rgb(226, 226, 226)",
  info: "rgb(69, 144, 222)",
  danger: "rgb(235, 77, 75)",
  success: "rgb(106, 176, 76)",
  ...baseTheme,
};

export const darkTheme = {
  background: "#000",
  card: "#161619",
  text: "#bbb",
  textAlternate: "#333",
  highlight: "rgb(212, 212, 212)",
  textHighlight: "#fff",
  boxShadow: "1px 1px 0px rgb(42, 39, 45)",
  cardTitle: "#1d1e27",
  border: "1px solid rgb(56, 56, 56)",
  info: "rgb(151, 212, 255)",
  danger: "rgb(212, 103, 103)",
  success: "rgb(109, 234, 153)",
  ...baseTheme,
};
