import * as React from "react";
import { View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles from "./SearchIcon.style";

interface IProps {
  iconName: string;
  iconType: string;
  iconSize: number;
  iconColor: string;
  iconComponent: any;
}

interface IState {}

export default class SearchIcon extends React.PureComponent<IProps, IState> {
  public static defaultProps = {
    iconName: "search",
    iconType: "Octicons",
    iconSize: 20,
    iconColor: "#807DE7",
  };

  render() {
    const {
      iconName,
      iconType,
      iconSize,
      iconColor,
      iconComponent,
    } = this.props;

    return (
      <View style={styles.container}>
        {iconComponent || (
          <Icon
            name={iconName}
            type={iconType}
            size={iconSize}
            color={iconColor}
          />
        )}
      </View>
    );
  }
}
