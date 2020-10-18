import React, { Component } from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
/**
 * ? Local Imports
 */
import styles from "./App.style.ts";
import SearchBar from "./lib/SearchBar";

interface IProps {}

interface IState {}

export default class App extends Component<IProps, IState> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <SearchBar />
      </SafeAreaView>
    );
  }
}
