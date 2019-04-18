import React, { Component } from "react";
import {
  View,
  Platform,
  FlatList,
  StatusBar,
  UIManager,
  Dimensions,
  SafeAreaView,
  LayoutAnimation
} from "react-native";
import GradientCard from "react-native-gradient-card-view";
import { LineChart } from "react-native-svg-charts";
import SearchBar from "react-native-dynamic-search-bar";
import { CustomLayoutSpring } from "react-native-animation-layout";

// Static Data
import staticData from "./src/data/staticData";

const { width } = Dimensions.get("window");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      dataSource: staticData,
      dataBackup: staticData,
      isLoading: true,
      page: 1,
      seed: 1,
      refreshing: false
    };

    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  filterList = text => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    LayoutAnimation.configureNext(CustomLayoutSpring(1050, 0.01, "scaleXY"));
    this.setState({
      query: text,
      dataSource: newData
    });
  };

  renderItem(item) {
    return (
      <GradientCard
        title={item.name}
        shadowStyle={{
          ...Platform.select({
            ios: {
              shadowColor: "#000",
              shadowOffset: {
                width: 3,
                height: 3
              },
              shadowRadius: 3,
              shadowOpacity: 0.4
            },
            android: {
              elevation: 3
            }
          })
        }}
        imageSource={item.image}
        centerTitle={item.value}
        subtitle={item.shortName}
        width={width * 0.9}
        style={{
          width: width,
          marginTop: 16,
          justifyContent: "center",
          alignItems: "center"
        }}
        centerSubtitle={item.change}
        centerSubtitleStyle={{
          fontSize: 12,
          marginLeft: 8,
          textAlign: "center",
          color: item.strokeColor
        }}
        rightComponent={
          <View>
            <LineChart
              data={item.data}
              style={styles.chartStyle}
              contentInset={styles.chartContentInset}
              svg={{
                strokeWidth: 1.5,
                fill: item.fillColor,
                stroke: item.strokeColor
              }}
            />
          </View>
        }
      />
    );
  }

  onRefresh = () => {
    this.setState({
      dataSource: [],
      isLoading: false,
      refreshing: true,
      seed: 1,
      page: 1
    });
    // this.fetchData();
  };

  loadMore = () => {
    this.setState({
      // refreshing: true,
      page: this.state.page + 1
    });
    // this.fetchData();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#21283d" }}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.container}>
          <SearchBar
            autoFocus={false}
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            backgroundColor="#353d5e"
            placeholder="Search here"
            onChangeText={text => {
              this.filterList(text);
            }}
            onPressCancel={() => {
              this.filterList("");
            }}
            onPress={() => alert("onPress")}
          />
          <View style={{ top: 12 }}>
            <FlatList
              data={this.state.dataSource}
              renderItem={({ item }) => this.renderItem(item)}
              onEndReached={this.loadMore}
              onRefresh={this.onRefresh}
              refreshing={this.state.refreshing}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  container: {
    ...Platform.select({
      android: {
        top: 24
      }
    }),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#21283d"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  chartStyle: {
    height: 100,
    width: 100
  },
  chartContentInset: {
    top: 30,
    bottom: 30
  }
};
