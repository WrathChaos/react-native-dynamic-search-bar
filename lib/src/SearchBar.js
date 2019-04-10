import React, { Component } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
// Styles & Other Components
import styles, {
  container,
  _shadowStyle,
  textInputStyle
} from "./SearchBar.style";
import SearchIcon from "./components/SearchIcon";
import SearchCancel from "./components/SearchCancel";
import SearchTextInput from "./components/SearchTextInput";

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
      placeholder,
      onChangeText,
      onPressCancel,
      iconComponent,
      textInputValue,
      cancelIconName,
      cancelIconType,
      cancelIconSize,
      cancelIconColor,
      cancelComponent,
      textInputDisable,
      textInputComponent,
      cancelIconComponent,
      cancelButtonDisable
    } = this.props;

    return (
      <TouchableOpacity
        style={[
          styles.center,
          container(this.props),
          styles.ifIPhoneXHeader,
          _shadowStyle(shadowColor)
        ]}
        onPress={onPress}
        rippleColor="#807DE7"
        rippleContainerBorderRadius={10}
      >
        <View style={styles.containerGlue}>
          <View style={styles.searchStyle}>
            <SearchIcon
              iconName={iconName}
              iconType={iconType}
              iconSize={iconSize}
              iconColor={iconColor}
              iconComponent={iconComponent}
            />
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
                      ref={c => {
                        this.textInput = c;
                      }}
                      placeholderTextColor={fontColor}
                      style={[textInputStyle(fontSize, fontColor)]}
                      placeholder={placeholder}
                      value={textInputValue}
                      onChangeText={onChangeText}
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
