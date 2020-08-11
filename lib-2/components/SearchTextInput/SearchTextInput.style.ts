import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export const textStyle = (
  fontSize: number = 13,
  fontColor: string = "#b3b6c3"
) => {
  return {
    left: 24,
    bottom: 1,
    width: 100,
    color: fontColor,
    fontSize: fontSize,
  };
};

export default StyleSheet.create<Style>({
  container: {
    width: 100,
    alignContent: "center",
    justifyContent: "center",
  },
});
