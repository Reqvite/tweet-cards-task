export interface ITheme {
  [key: string]: {
    [key: string]: string;
  };
}

export const theme: ITheme = {
  colors: {
    mainTextColor: "#EBD8FF",
    secondaryTextColor: "#373737",
    accentColor: "#5CD3A8",

    boxBgColor:
      "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
    headerBgColor: "rgba(75,42,153, 0.6)",
    dropDownBgColor: "rgba(75,42,153, 0.9)",

    buttonBgColor: "#EBD8FF",
  },
};
