import React, { Component } from "react";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import styles, { textStyle } from "./styles/SearchTextInput.style";

export default class SearchTextInput extends Component {
  renderContent(props) {
    const { fontSize, fontColor, placeholder, textInputDisable } = props;
    return (
      textInputDisable && (
        <Text style={[textStyle(fontSize, fontColor)]}>{placeholder}</Text>
      )
    );
  }

  render() {
    const { textInputComponent } = this.props;
    return (
      <View>
        {textInputComponent || (
          <View style={styles.container}>{this.renderContent(this.props)}</View>
        )}
      </View>
    );
  }
}
