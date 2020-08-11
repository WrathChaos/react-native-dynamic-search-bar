import * as React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import Spinner from "react-native-spinkit";
/**
 * ? Local Imports
 */
import styles, {
  container,
  _shadowStyle,
  textInputStyle,
  ifIPhoneXHeader,
} from "./SearchBar.style";
import SearchIcon from "./components/SearchIcon/SearchIcon";
import SearchCancel from "./components/SearchCancel/SearchCancel";
import SearchTextInput from "./components/SearchTextInput/SearchTextInput";

interface IProps {
  width: number;
  height: number;
  autoFocus: boolean;
  backgroundColor: string;
  cancelComponent: any;
  cancelIconColor: string;
  cancelIconComponent: any;
  cancelIconName: string;
  cancelIconSize: number;
  cancelIconType: string;
  fontColor: string;
  fontSize: number;
  iconColor: string;
  iconComponent: any;
  iconName: string;
  iconSize: number;
  iconType: string;
  noExtraMargin: boolean;
  onPress: Function;
  onPressCancel: Function;
  onPressToFocus: Function;
  placeholder: string;
  shadowColor: string;
  shadowStyle: any;
  textInputComponent: any;
  textInputDisable: boolean;
  cancelButtonDisable: boolean;
  spinnerType: any;
  spinnerSize: number;
  textInputValue: any;
  spinnerColor: string;
  spinnerVisibility: boolean;
}

interface IState {}

let textInputRef: any = null;

export default class SearchBar extends React.Component<IProps, IState> {
  textInput: any = null;
  public static defaultProps = {
    spinnerSize: 16,
    spinnerType: "Circle",
    spinnerColor: "#fdfdfd",
    spinnerVisibility: false,
  };

  render() {
    const {
      height,
      width,
      fontSize,
      iconColor,
      autoFocus,
      iconComponent,
      iconName,
      iconSize,
      iconType,
      fontColor,
      noExtraMargin,
      onPress,
      onPressCancel,
      onPressToFocus,
      placeholder,
      shadowColor,
      shadowStyle,
      textInputComponent,
      textInputDisable,
      textInputValue,
      spinnerColor,
      spinnerSize,
      spinnerType,
      spinnerVisibility,
      cancelIconName,
      cancelIconType,
      cancelIconSize,
      cancelIconColor,
      cancelComponent,
      cancelIconComponent,
      cancelButtonDisable,
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.center,
          container(this.props),
          ifIPhoneXHeader(noExtraMargin),
          shadowStyle || _shadowStyle(shadowColor),
        ]}
        onPress={() => {
          onPressToFocus ? textInputRef.focus() : onPress();
        }}
      >
        <View style={styles.containerGlue}>
          <View style={styles.searchStyle}>
            {spinnerVisibility ? (
              <View
                style={{
                  left: 8,
                  bottom: 3,
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <Spinner
                  type={spinnerType}
                  size={spinnerSize}
                  color={spinnerColor}
                  {...this.props}
                />
              </View>
            ) : (
              <SearchIcon
                iconName={iconName}
                iconType={iconType}
                iconSize={iconSize}
                iconColor={iconColor}
                iconComponent={iconComponent}
              />
            )}
            <SearchTextInput
              fontSize={fontSize}
              fontColor={fontColor}
              placeholder={placeholder}
              textInputDisable={textInputDisable}
              textInputComponent={
                textInputComponent ||
                (!textInputDisable && (
                  <View style={styles.textInputContainer}>
                    <TextInput
                      autoFocus={autoFocus}
                      value={textInputValue}
                      placeholder={placeholder}
                      placeholderTextColor={fontColor}
                      style={textInputStyle(fontSize, fontColor, height, width)}
                      ref={(c) => {
                        this.textInput = c;
                        textInputRef = c;
                      }}
                      {...this.props}
                    />
                  </View>
                ))
              }
            />
          </View>
          <SearchCancel
            cancelIconName={cancelIconName}
            cancelIconType={cancelIconType}
            cancelIconSize={cancelIconSize}
            cancelIconColor={cancelIconColor}
            cancelComponent={cancelComponent}
            cancelIconComponent={cancelIconComponent}
            cancelButtonDisable={cancelButtonDisable}
            onPressCancel={() => {
              if (onPressCancel) {
                if (this.textInput) this.textInput.clear();
                onPressCancel();
              } else {
                if (this.textInput) this.textInput.clear();
              }
            }}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
