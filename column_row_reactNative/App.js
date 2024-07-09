// ini adalah untuk import komponen yang dibutuhkan
import { View, Text } from "react-native";

// Arrow function dengan app
const App = () => {
  // dalam satu tag return hanya boeh memiliki satu tag view saja
  return (
    <View style={{ flex: 1, flexDirection: "column" }}>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View style={{ flex: 2, flexDirection: "row", backgroundColor: "wheat" }}></View>
        <View style={{ flex: 1, backgroundColor: "lightblue" }}></View>
        <View style={{ flex: 1, backgroundColor: "violet" }}></View>
      </View>
      <View style={{ flex: 4, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "red" }}></View>
        <View style={{ flex: 1, backgroundColor: "yellow" }}></View>
        <View style={{ flex: 1, backgroundColor: "green" }}></View>
        <View style={{ flex: 1, backgroundColor: "chocolate" }}></View>
      </View>
      <View style={{ flex: 5, backgroundColor: "brown" }}></View>
      <View style={{ flex: 3, flexDirection: "row" }}>
        <View style={{ flex: 3, backgroundColor: "blue" }}></View>
        <View style={{ flex: 3, backgroundColor: "purple" }}></View>
        <View style={{ flex: 1, backgroundColor: "rose" }}></View>
      </View>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <View style={{ flex: 3, backgroundColor: "cyan" }}></View>
        <View style={{ flex: 3, backgroundColor: "grey" }}></View>
      </View>
      <View style={{ flex: 5, flexDirection: "row" }}>
        <View style={{ flex: 1, backgroundColor: "orange" }}></View>
        <View style={{ flex: 1, backgroundColor: "lightgreen" }}></View>
        <View style={{ flex: 1, backgroundColor: "lightblue" }}></View>
        <View style={{ flex: 1, backgroundColor: "pink" }}></View>
        <View style={{ flex: 1, backgroundColor: "wheat" }}></View>
      </View>
      <View style={{flex:4, flexDirection:'row'}}>
        <View style={{flex:1, backgroundColor:'chocolate'}}></View>
        <View style={{flex:1, backgroundColor:'blue'}}></View>
        <View style={{flex:1, backgroundColor:'purple'}}></View>
        <View style={{flex:1, backgroundColor:'green'}}></View>
      </View>
      <View style={{flex:5, flexDirection:'row'}}>
        <View style={{flex:1, backgroundColor:'orange'}}></View>
        <View style={{flex:1, backgroundColor:'lightgreen'}}></View>
        <View style={{flex:1, backgroundColor:'lightblue'}}></View>
        <View style={{flex:1, backgroundColor:'violet'}}></View>
        <View style={{flex:1, backgroundColor:'pink'}}></View>
      </View>
    </View>
  );
};

// menjadikan function app sebagai default
export default App;