import React from "react";
import { View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles from "./styles/SearchIcon.style";

export default class SearchIcon extends React.PureComponent {
  render() {
    const {
      iconName,
      iconType,
      iconSize,
      iconColor,
      iconComponent
    } = this.props;
    return (
      <View style={[styles.container]}>
        {iconComponent || (
          <Icon
            name={iconName || "search"}
            type={iconType || "Octicons"}
            size={iconSize || 20}
            color={iconColor || "#807DE7"}
          />
        )}
      </View>
    );
  }
}
