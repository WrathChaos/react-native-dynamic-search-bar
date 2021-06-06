import React, { Component } from "react";
import { View, StatusBar, FlatList, Platform, UIManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LineChart } from "react-native-svg-charts";
import GradientCard from "react-native-gradient-card-view";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
/**
 * ? Local Imports
 */
// import SearchBar from "react-native-dynamic-search-bar";
import SearchBar from "./build/dist/SearchBar";
import styles, { centerSubtitleStyle } from "./styles";
// Static Data
import staticData from "./src/data/staticData";

interface IProps {}

interface IState {
  query: string;
  dataBackup: any;
  dataSource: any;
  isLoading: boolean;
  refreshing: boolean;
  spinnerVisibility: boolean;
}

export default class App extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      query: "",
      isLoading: true,
      refreshing: false,
      dataBackup: staticData,
      dataSource: staticData,
      spinnerVisibility: false,
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  filterList = (text: string) => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter((item: any) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      query: text,
      dataSource: newData,
    });
  };

  renderRightComponent = (item: any) => (
    <View>
      <LineChart
        data={item.data}
        style={styles.chartStyle}
        contentInset={styles.chartContentInset}
        svg={{
          strokeWidth: 1.5,
          fill: item.fillColor,
          stroke: item.strokeColor,
        }}
      />
    </View>
  );

  renderItem(item: any) {
    return (
      <GradientCard
        key={item.name}
        title={item.name}
        style={styles.cardStyle}
        imageSource={item.image}
        centerTitle={item.value}
        subtitle={item.shortName}
        width={ScreenWidth * 0.9}
        centerSubtitle={item.change}
        shadowStyle={styles.cardShadowStyle}
        centerSubtitleStyle={centerSubtitleStyle(item)}
        rightComponent={this.renderRightComponent(item)}
      />
    );
  }

  render() {
    const { spinnerVisibility } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.container}>
          <SearchBar
            darkMode
            placeholder="Search"
            spinnerVisibility={spinnerVisibility}
            style={{ backgroundColor: "#353d5e" }}
            onChangeText={(text) => {
              if (text.length === 0)
                this.setState({ spinnerVisibility: false });
              else this.setState({ spinnerVisibility: true });
              this.filterList(text);
            }}
            onClearPress={() => {
              this.filterList("");
            }}
          />
          <View style={styles.flatListStyle}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => this.renderItem(item)}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
