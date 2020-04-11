import * as React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles from "./SearchCancel.style";

interface IProps {
  onPressCancel: any;
  cancelComponent: any;
  cancelIconName: string;
  cancelIconType: string;
  cancelIconSize: number;
  cancelIconColor: string;
  cancelIconComponent: any;
  cancelButtonDisable: boolean;
}

interface IState {}

export default class SearchCancel extends React.PureComponent<IProps, IState> {
  public static defaultProps = {
    cancelIconName: "clear",
    cancelIconType: "MaterialIcons",
    cancelIconSize: 23,
    cancelIconColor: "#b3b6c3",
  };

  renderIcon(props) {
    const {
      onPressCancel,
      cancelIconName,
      cancelIconType,
      cancelIconSize,
      cancelIconColor,
      cancelIconComponent,
      cancelButtonDisable,
    } = props;

    return (
      !cancelButtonDisable && (
        <TouchableOpacity onPress={onPressCancel} style={styles.iconContainer}>
          {cancelIconComponent || (
            <Icon
              name={cancelIconName}
              type={cancelIconType}
              size={cancelIconSize}
              color={cancelIconColor}
            />
          )}
        </TouchableOpacity>
      )
    );
  }

  render() {
    const { cancelComponent } = this.props;
    return cancelComponent || this.renderIcon(this.props);
  }
}
