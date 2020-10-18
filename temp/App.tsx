import React, { Component } from "react";
import {
  View,
  Platform,
  FlatList,
  StatusBar,
  UIManager,
  SafeAreaView,
  LayoutAnimation,
} from "react-native";
import { LineChart } from "react-native-svg-charts";
// import SearchBar from "react-native-dynamic-search-bar";
import SearchBar from "./lib/SearchBar";
import GradientCard from "react-native-gradient-card-view";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { CustomLayoutSpring } from "react-native-animation-layout";
// Static Data
import staticData from "./src/data/staticData";
import styles, { centerSubtitleStyle } from "./styles";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      seed: 1,
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

  filterList = (text) => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter((item) => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    LayoutAnimation.configureNext(CustomLayoutSpring(null, null, "scaleXY"));
    this.setState({
      query: text,
      dataSource: newData,
    });
  };

  renderRightComponent = (item) => (
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

  renderItem(item) {
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

  onRefresh = () => {
    this.setState({
      dataSource: [],
      isLoading: false,
      refreshing: true,
      seed: 1,
      page: 1,
    });
    // this.fetchData();
  };

  loadMore = () => {
    this.setState({
      // refreshing: true,
      page: this.state.page + 1,
    });
    // this.fetchData();
  };

  render() {
    const { spinnerVisibility } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaViewStyle}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.container}>
          <SearchBar
            // width={300}
            // height={50}
            onPressToFocus
            autoFocus={false}
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            placeholder="Search"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            backgroundColor="#353d5e"
            spinnerVisibility={spinnerVisibility}
            onChangeText={(text) => {
              if (text.length === 0)
                this.setState({ spinnerVisibility: false });
              else this.setState({ spinnerVisibility: true });
              this.filterList(text);
            }}
            onPressCancel={() => {
              this.filterList("");
            }}
            // onPress={() => alert("onPress")}
            // onKeyPress={() => alert("onKeyPress")}
          />
          <View style={styles.flatListStyle}>
            <FlatList
              onRefresh={this.onRefresh}
              data={this.state.dataSource}
              onEndReached={this.loadMore}
              refreshing={this.state.refreshing}
              renderItem={({ item }) => this.renderItem(item)}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
