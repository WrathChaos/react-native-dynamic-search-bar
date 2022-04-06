import { ViewStyle, ImageStyle, TextStyle } from "react-native";
interface Style {
    searchContainer: ViewStyle;
    searchIconImageStyle: ImageStyle;
    clearIconImageStyle: ImageStyle;
    clearIconContainer: ViewStyle;
    spinnerContainer: ViewStyle;
}
export declare const _container: (darkMode: boolean) => ViewStyle;
export declare const _textInputStyle: (darkMode: boolean) => TextStyle;
declare const _default: Style;
export default _default;
