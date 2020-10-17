import * as React from "react";
import { View, Image } from "react-native";
/**
 * ? Local Imports
 */
import styles from "./SearchIcon.style";

export interface ISearchIconProps {
  ImageComponent?: any;
  searchIconComponent?: any;
}

interface IState {}

export default class SearchIcon extends React.PureComponent<ISearchIconProps, IState> {
  render() {
    const {
      searchIconComponent,
      ImageComponent = Image
    } = this.props;

    return (
      <View style={styles.container}>
        {searchIconComponent || (
          <ImageComponent source={require("../../local-assets/search-icon.png")} style={{height:20, width:20}} />
        )}
      </View>
    );
  }
}
