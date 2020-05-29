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
  fontSize: number;
  iconName: string;
  iconType: string;
  iconSize: number;
  shadowStyle: any;
  onPress: Function;
  iconColor: string;
  fontColor: string;
  autoFocus: boolean;
  iconComponent: any;
  shadowColor: string;
  placeholder: string;
  textInputValue: any;
  cancelComponent: any;
  noExtraMargin: boolean;
  cancelIconName: string;
  cancelIconType: string;
  cancelIconSize: number;
  onPressCancel: Function;
  cancelIconColor: string;
  textInputComponent: any;
  onPressToFocus: Function;
  cancelIconComponent: any;
  textInputDisable: boolean;
  cancelButtonDisable: boolean;

  spinnerType: any;
  spinnerSize: number;
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
      spinnerType,
      spinnerSize,
      spinnerColor,
      spinnerVisibility,
      onPress,
      fontSize,
      iconName,
      iconType,
      iconSize,
      iconColor,
      fontColor,
      autoFocus,
      shadowColor,
      placeholder,
      shadowStyle,
      onPressCancel,
      iconComponent,
      noExtraMargin,
      onPressToFocus,
      textInputValue,
      cancelIconName,
      cancelIconType,
      cancelIconSize,
      cancelIconColor,
      cancelComponent,
      textInputDisable,
      textInputComponent,
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
                      style={[textInputStyle(fontSize, fontColor)]}
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
