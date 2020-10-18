import { ViewStyle, ImageStyle, TextStyle, StyleSheet } from "react-native";

interface Style {
  container: ViewStyle;
  searchContainer: ViewStyle;
  searchIconImageStyle: ImageStyle;
  textInputStyle: TextStyle;
  cancelIconImageStyle: ImageStyle;
  cancelIconContainer: ViewStyle;
  spinnerContainer: ViewStyle;
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
  searchContainer: {
    marginLeft: 12,
  },
  searchIconImageStyle: {
    width: 18,
    height: 18,
  },
  textInputStyle: {
    width: "80%",
    marginLeft: 12,
    color: "#19191a",
  },
  cancelIconImageStyle: {
    width: 18,
    height: 18,
  },
  cancelIconContainer: {
    marginRight: 8,
    marginLeft: "auto",
  },
  spinnerContainer: {
    marginLeft: 12,
  },
});
