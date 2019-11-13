import React, { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
// Styles & Other Components
import styles, {
  container,
  _shadowStyle,
  textInputStyle,
  ifIPhoneXHeader
} from "./SearchBar.style";
import SearchIcon from "./components/SearchIcon";
import SearchCancel from "./components/SearchCancel";
import SearchTextInput from "./components/SearchTextInput";

let textInputRef = null;

export default class SearchBar extends Component {
  render() {
    const {
      onPress,
      fontSize,
      iconName,
      iconType,
      iconSize,
      iconColor,
      fontColor,
      autoFocus,
      shadowColor,
      shadowStyle,
      placeholder,
      onChangeText,
      onPressCancel,
      onPressSearchIcon,
      iconComponent,
      onPressToFocus,
      textInputValue,
      textInputDefaultValue,
      cancelIconName,
      cancelIconType,
      cancelIconSize,
      cancelIconColor,
      cancelComponent,
      textInputDisable,
      textInputComponent,
      cancelIconComponent,
      cancelButtonDisable,
      noExtraMargin
      
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.center,
          container(this.props),
          ifIPhoneXHeader(noExtraMargin),
          _shadowStyle(shadowColor, shadowStyle)
        ]}
        onPress={() => {
          onPressToFocus ? textInputRef.focus() : onPress();
        }}
        rippleColor="#807DE7"
        rippleContainerBorderRadius={10}
      >
        <View style={styles.containerGlue}>
          <View style={styles.searchStyle}>
            <TouchableOpacity onPress={() => {
                if (onPressSearchIcon) {
                  onPressSearchIcon();
                  if (this.textInput) this.textInput.clear();
                }
              }}
              style={styles.iconContainer}>
              <SearchIcon
                iconName={iconName}
                iconType={iconType}
                iconSize={iconSize}
                iconColor={iconColor}
                iconComponent={iconComponent}
              />
            </TouchableOpacity>
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
                      ref={c => {
                        this.textInput = c;
                        textInputRef = c;
                      }}
                      autoFocus={autoFocus}
                      defaultValue={textInputDefaultValue}
                      value={textInputValue}
                      placeholder={placeholder}
                      onChangeText={onChangeText}
                      placeholderTextColor={fontColor}
                      style={[textInputStyle(fontSize, fontColor)]}
                      returnKeyType="search"
                      underlineColorAndroid="#FFF"
                      placeholderTextColor='#C9C9C9'
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
            cancelIconComponent={cancelIconComponent}
            onPressCancel={() => {
              if (onPressCancel) {
                if (this.textInput) this.textInput.clear();
                onPressCancel();
              } else {
                if (this.textInput) this.textInput.clear();
              }
            }}
            cancelComponent={cancelComponent}
            cancelButtonDisable={cancelButtonDisable}
          />
        </View>
      </TouchableOpacity>
    );
  }
}
