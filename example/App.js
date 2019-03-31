import React, { Component } from "react";
import {
  ActivityIndicator,
  FlatList,
  LayoutAnimation,
  SafeAreaView,
  StatusBar,
  View
} from "react-native";
import GradientCard from "react-native-gradient-card-view";
import { LineChart } from "react-native-svg-charts";
import SearchBar from "./lib/src/SearchBar";

const listData = [
  {
    name: "Bitcoin",
    shortName: "BTC",
    value: "$ 4081,95",
    change: "+ 1,48 ↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    image: require("./assets/Bitcoin.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Ethereum",
    shortName: "ETH",
    value: "$ 141.39",
    change: "+ 0,59 ↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    image: require("./assets/Ethereum.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Litecoin",
    shortName: "BCH",
    value: "$ 1535.39",
    change: "+ 1,51 ↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    image: require("./assets/Litecoin.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Ripple",
    shortName: "XRP",
    value: "$ 4081,95",
    change: "+ 1,48 ↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    image: require("./assets/Ripple.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Dash",
    shortName: "DSH",
    value: "$ 141.39",
    change: "+ 0,59 ↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    image: require("./assets/Dash.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Iota",
    shortName: "MIOTA",
    value: "$ 141.39",
    change: "+ 0,59 ↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    image: require("./assets/IOTA.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Eos",
    shortName: "EOS",
    value: "$ 4081,95",
    change: "+ 1,48 ↑",
    fillColor: "rgba(163, 224, 97, 0.2)",
    strokeColor: "rgba(163, 224, 97, 1.0)",
    image: require("./assets/EOS.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  },
  {
    name: "Neo",
    shortName: "NEO",
    value: "$ 141.39",
    change: "+ 0,59 ↓",
    fillColor: "rgba(234, 53, 53, 0.2)",
    strokeColor: "rgba(234, 53, 53, 1.0)",
    image: require("./assets/Netko-coin.png"),
    data: [
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10,
      Math.random() * 10
    ]
  }
];

// Spring
var CustomLayoutSpring = {
  duration: 700,
  create: {
    type: LayoutAnimation.Types.spring,
    property: LayoutAnimation.Properties.scaleXY,
    springDamping: 0.7
  },
  update: {
    type: LayoutAnimation.Types.spring,
    springDamping: 0.7
  }
};

// Linear with easing
var CustomLayoutLinear = {
  duration: 500,
  create: {
    type: LayoutAnimation.Types.linear,
    property: LayoutAnimation.Properties.opacity
  },
  update: {
    type: LayoutAnimation.Types.curveEaseInEaseOut
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      dataSource: listData,
      dataBackup: listData,
      isLoading: true,
      page: 1,
      seed: 1,
      refreshing: false
    };
  }

  filterList = text => {
    var newData = this.state.dataBackup;
    newData = this.state.dataBackup.filter(item => {
      const itemData = item.name.toLowerCase();
      const textData = text.toLowerCase();
      return itemData.indexOf(textData) > -1;
    });
    LayoutAnimation.configureNext(CustomLayoutSpring);
    this.setState({
      query: text,
      dataSource: newData
    });
  };

  renderItem(item) {
    return (
      <GradientCard
        title={item.name}
        shadowColor="#000"
        imageSource={item.image}
        centerTitle={item.value}
        subtitle={item.shortName}
        style={{ marginTop: 16 }}
        centerSubtitle={item.change}
        centerSubtitleStyle={{
          fontSize: 12,
          marginLeft: 8,
          textAlign: "center",
          color: item.strokeColor
        }}
        rightComponent={
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
    // if (this.state.isLoading) {
    //   return (
    //     <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
    //       <ActivityIndicator />
    //     </View>
    //   );
    // }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#21283d" }}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.container}>
          <SearchBar
            fontColor="#c6c6c6"
            iconColor="#c6c6c6"
            shadowColor="#282828"
            cancelIconColor="#c6c6c6"
            backgroundColor="#353d5e"
            placeholder="Buradan arama yapabilirsiniz"
            onChangeText={text => {
              this.filterList(text);
            }}
            onPress={() => alert("onPress")}
          />
          <View style={{ top: 24 }}>
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
