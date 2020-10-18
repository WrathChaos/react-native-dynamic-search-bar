import * as React from "react";
import {  Image, TouchableOpacity } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SearchCancel.style";

export interface ISearchCancelProps {
  cancelComponent?: any;
  ImageComponent?: any;
  cancelIconComponent?: any;
  cancelButtonDisable: boolean;
  onPressCancel: () => void;
}

interface IState {}

export default class SearchCancel extends React.PureComponent<ISearchCancelProps, IState> {
  public static defaultProps = {
    cancelIconName: "clear",
    cancelIconType: "MaterialIcons",
    cancelIconSize: 23,
    cancelIconColor: "#b3b6c3",
  };

  renderIcon(props: ISearchCancelProps) {
    const {
      onPressCancel,
      ImageComponent = Image,
      cancelIconComponent,
      cancelButtonDisable,
    } = props;

    return (
      !cancelButtonDisable && (
        <TouchableOpacity onPress={onPressCancel} style={styles.iconContainer}>
          {cancelIconComponent || (
            <ImageComponent source={require("../../local-assets/cancel-icon.png")} style={{height:20, width:20}} />
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
