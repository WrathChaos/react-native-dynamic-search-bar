import { StyleSheet } from "react-native";
export const _container = (darkMode) => ({
    height: 40,
    width: "90%",
    borderRadius: 12,
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: darkMode ? "#19191a" : "#fdfdfd",
    shadowColor: darkMode ? "#19191a" : "#757575",
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowOffset: {
        width: 0,
        height: 3,
    },
});
export const _textInputStyle = (darkMode) => ({
    width: "80%",
    marginLeft: 12,
    color: darkMode ? "#fdfdfd" : "#19191a",
});
export default StyleSheet.create({
    searchContainer: {
        marginLeft: 12,
    },
    searchIconImageStyle: {
        width: 18,
        height: 18,
    },
    clearIconImageStyle: {
        width: 15,
        height: 15,
    },
    clearIconContainer: {
        marginRight: 12,
        marginLeft: "auto",
    },
    spinnerContainer: {
        marginLeft: 12,
    },
});
//# sourceMappingURL=SearchBar.style.js.map