import React, { Component } from "react";
import { Text, View } from "react-native";
import Spinner from "react-native-spinkit";
import RNBounceable from "@freakycoder/react-native-bounceable";
/**
 * ? Local Imports
 */
import styles from "./SearchBar.style.ts";

interface ISearchBarProps {
  onPress?: () => void;
}

interface IState {}

export default class SearchBar extends Component<ISearchBarProps, IState> {
  render() {
    const { onPress } = this.props;
    return (
      <RNBounceable
        style={{
          height: 35,
          width: "90%",
          borderRadius: 12,
          alignSelf: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          shadowRadius: 8,
          shadowOpacity: 0.3,
          shadowColor: "#757575",
          shadowOffset: {
            width: 0,
            height: 3,
          },
        }}
        onPress={onPress}
      >
        <Text> textInComponent </Text>
      </RNBounceable>
    );
  }
}
