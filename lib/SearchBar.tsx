import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ViewStyle,
  TextStyle,
  ImageStyle,
  TextInputProps,
  TouchableWithoutFeedbackProps,
} from "react-native";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./SearchBar.style";

const defaultSearchIcon = require("./local-assets/search-icon.png");
const defaultCancelIcon = require("./local-assets/cancel-icon.png");

export interface ISource {
  source: string | { uri: string };
}
export interface ISearchBarProps
  extends TouchableWithoutFeedbackProps,
    TextInputProps {
  placeholder?: string;
  ImageComponent?: any;
  spinnerType?: string;
  spinnerSize?: number;
  spinnerColor?: string;
  spinnerVisibility?: boolean;
  searchIconComponent?: React.ReactChild;
  cancelIconComponent?: React.ReactChild;
  searchIconImageSource?: ISource;
  cancelIconImageSource?: ISource;
  style?: ViewStyle | Array<ViewStyle> | undefined;
  textInputStyle?: TextStyle | Array<TextStyle>;
  searchIconImageStyle?: ImageStyle | Array<ImageStyle>;
  cancelIconImageStyle?: ImageStyle | Array<ImageStyle>;
  onBlur?: () => void;
  onFocus?: () => void;
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

  renderSpinner = () => {
    const {
      spinnerSize = 15,
      spinnerType = "FadingCircleAlt",
      spinnerColor = "#19191a",
      spinnerVisibility = false,
    } = this.props;
    return (
      <View style={styles.spinnerContainer}>
        <Spinner
          size={spinnerSize}
          type={spinnerType}
          color={spinnerColor}
          isVisible={spinnerVisibility}
        />
      </View>
    );
  };

  renderSearchIcon = () => {
    const {
      onSearchPress,
      searchIconComponent,
      searchIconImageStyle,
      ImageComponent = Image,
      searchIconImageSource = defaultSearchIcon,
    } = this.props;
    return (
      <RNBounceable style={styles.searchContainer} onPress={onSearchPress}>
        {searchIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={searchIconImageSource}
            style={[styles.searchIconImageStyle, searchIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  renderTextInput = () => {
    const {
      onBlur,
      onFocus,
      textInputStyle,
      placeholder = "Search here...",
    } = this.props;
    return (
      <TextInput
        {...this.props}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={(ref) => (this.inputRef = ref)}
        style={[styles.textInputStyle, textInputStyle]}
        placeholder={placeholder}
      />
    );
  };

  renderCancelIcon = () => {
    const {
      cancelIconComponent,
      cancelIconImageStyle,
      ImageComponent = Image,
      cancelIconImageSource = defaultCancelIcon,
    } = this.props;
    return (
      <RNBounceable
        bounceEffect={0.8}
        style={styles.cancelIconContainer}
        onPress={this.handleOnCancelPress}
      >
        {cancelIconComponent || (
          <ImageComponent
            resizeMode="contain"
            source={cancelIconImageSource}
            style={[styles.cancelIconImageStyle, cancelIconImageStyle]}
          />
        )}
      </RNBounceable>
    );
  };

  render() {
    const { style, spinnerVisibility } = this.props;
    return (
      <RNBounceable
        {...this.props}
        bounceEffect={0.97}
        style={[styles.container, style]}
        onPress={this.handleSearchBarPress}
      >
        {spinnerVisibility ? this.renderSpinner() : this.renderSearchIcon()}
        {this.renderTextInput()}
        {this.renderCancelIcon()}
      </RNBounceable>
    );
  }
}
