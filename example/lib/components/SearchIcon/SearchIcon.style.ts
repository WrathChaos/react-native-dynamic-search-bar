import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    left: 8,
    alignContent: "center",
    justifyContent: "center"
  }
});
