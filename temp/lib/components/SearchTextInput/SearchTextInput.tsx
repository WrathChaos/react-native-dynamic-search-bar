import * as React from "react";
import { Text, View } from "react-native";
/**
 * ? Local Imports
 */
import styles, { textStyle } from "./SearchTextInput.style";

interface IProps {
  fontSize: number;
  fontColor: string;
  placeholder: string;
  textInputComponent: any;
  textInputDisable: boolean;
}

interface IState {}

export default class SearchTextInput extends React.Component<IProps, IState> {
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
