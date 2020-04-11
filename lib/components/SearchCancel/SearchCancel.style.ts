import { ViewStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  iconContainer: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  iconContainer: {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center"
  }
});
