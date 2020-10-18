import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
}

export default StyleSheet.create<Style>({
  container: {
    height: 40,
    width: "90%",
    borderRadius: 12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowColor: "#757575",
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
});
