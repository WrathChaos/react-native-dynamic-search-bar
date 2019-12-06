import React from "react";
import { TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
/**
 * ? Local Imports
 */
import styles from "./styles/SearchCancel.style";

export default class SearchCancel extends React.PureComponent {
  renderIcon(props) {
    const {
      onPressCancel,
      cancelIconName,
      cancelIconType,
      cancelIconSize,
      cancelIconColor,
      cancelIconComponent,
      cancelButtonDisable
    } = props;
    return (
      !cancelButtonDisable && (
        <TouchableOpacity onPress={onPressCancel} style={styles.iconContainer}>
          {cancelIconComponent || (
            <Icon
              name={cancelIconName || "clear"}
              type={cancelIconType || "MaterialIcons"}
              size={cancelIconSize || 23}
              color={cancelIconColor || "#b3b6c3"}
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
