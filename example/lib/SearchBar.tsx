import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ViewStyle,
  StyleSheet,
  TouchableWithoutFeedbackProps,
} from "react-native";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./SearchBar.style.ts";

const defaultSearchIcon = require("./local-assets/search-icon.png");
const defaultCancelIcon = require("./local-assets/cancel-icon.png");

export interface ISource {
  source: string | { uri: string };
}
export interface ISearchBarProps extends TouchableWithoutFeedbackProps {
  placeholder?: string;
  ImageComponent?: any;
  searchIconImageSource?: ISource;
  cancelIconImageSource?: ISource;
  style?: ViewStyle | Array<ViewStyle>;
  onPress?: () => void;
  onSearchPress?: () => void;
  onCancelPress?: () => void;
}

interface IState {}

export default class SearchBar extends Component<ISearchBarProps, IState> {
  inputRef: TextInput | null = null;

  handleSearchBarPress = () => {
    this.inputRef?.focus();
    this.props.onPress && this.props.onPress();
  };

  handleOnCancelPress = () => {
    this.inputRef?.clear();
    this.props.onCancelPress && this.props.onCancelPress();
  };

  /* -------------------------------------------------------------------------- */
  /*                               Render Methods                               */
  /* -------------------------------------------------------------------------- */

  renderSearchIcon = () => {
    const {
      onSearchPress,
      ImageComponent = Image,
      searchIconImageSource = defaultSearchIcon,
    } = this.props;
    return (
      <RNBounceable
        style={{
          marginLeft: 12,
        }}
        onPress={onSearchPress}
      >
        <ImageComponent
          resizeMode="contain"
          source={searchIconImageSource}
          style={{
            width: 18,
            height: 18,
          }}
        />
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const { placeholder = "Search here..." } = this.props;
    return (
      <TextInput
        {...this.props}
        ref={(ref) => (this.inputRef = ref)}
        style={{ marginLeft: 12, width: "80%" }}
        placeholder={placeholder}
      />
    );
  };

  renderCancelIcon = () => {
    const {
      onCancelPress,
      ImageComponent = Image,
      cancelIconImageSource = defaultCancelIcon,
    } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.8}
        style={{ marginRight: 8, marginLeft: "auto" }}
        onPress={this.handleOnCancelPress}
      >
        <ImageComponent
          resizeMode="contain"
          source={cancelIconImageSource}
          style={{
            width: 18,
            height: 18,
          }}
        />
      </RNBounceable>
    );
  };

  render() {
    const { style } = this.props;
    return (
      <RNBounceable
        {...this.props}
        bounceEffect={0.97}
        style={[styles.container, style]}
        onPress={this.handleSearchBarPress}
      >
        {this.renderSearchIcon()}
        {this.renderTextInput()}
        {this.renderCancelIcon()}
      </RNBounceable>
    );
  }
}
