import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#FB5230",
  primaryBright: "#EC836E",
  primaryDark: "#b92608",
  secondary: "#330099",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const additionalColors = {
  binance: "#0773C9",
  overlay: "#c73316",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#e28370",
  backgroundDisabled: "#da9a8d",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#facdc3",
  contrast: "#311b17",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#f1baaf",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#ce492e",
  textDisabled: "#dad5d5",
  textSubtle: "#631404",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E28370 0%, #FB5230 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #FB5230 0%, #E28370 100%)",
    cardHeader: "linear-gradient(111.68deg, #ED4B9E 0%, #E28370 100%)",
    blue: "linear-gradient(180deg, #f0aa9c 0%, #E28370 100%)",
    violet: "linear-gradient(180deg, #f89b88 0%, #fd8a73 100%)",
    violetAlt: "linear-gradient(180deg, #d39487 0%, #ce7766 100%)",
    gold: "linear-gradient(180deg, #0773C9 0%, #0a82b9 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#a279f5",
  background: "#202136",
  backgroundDisabled: "#281b38",
  backgroundAlt: "#27262c",
  cardBorder: "#e44222",
  contrast: "#FFFFFF",
  dropdown: "#2c2624",
  dropdownDeep: "#411209",
  invertedContrast: "#662a1e",
  input: "#7a534c",
  inputSecondary: "#b18179",
  primaryDark: "#c73316",
  tertiary: "#8a6058",
  text: "#f0745c",
  textDisabled: "#745a55",
  textSubtle: "#fc7358",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #FB5230 0%, #e97d68 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #e97d68 0%, #FB5230 100%)",
    cardHeader: "linear-gradient(166.77deg, #a75342 0%, #8d2416 100%)",
    blue: "linear-gradient(180deg, #df745f 0%, #e06046 100%)",
    violet: "linear-gradient(180deg, #e93e1b 0%, #fa7054 100%)",
    violetAlt: "linear-gradient(180deg, #99311c 0%, #d84528 100%)",
    gold: "linear-gradient(180deg, #0773C9 0%, #0a82b9 100%)",
  },
};
