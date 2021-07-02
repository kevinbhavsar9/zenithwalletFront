import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
class Home2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableHighlight>
            <Image source={require("../assets/images/Home/navbarBTn.png")} />
          </TouchableHighlight>
          <View>
            <Text style={styles.text}>ZENITH WALLET</Text>
          </View>
          <TouchableHighlight>
            <Image source={require("../assets/images/Home/scan.png")} />
          </TouchableHighlight>
        </View>
        <View style={styles.body}></View>
        <View style={styles.footer}>
          <TouchableHighlight>
            <View style={styles.footerBtn}>
              <Image source={require("../assets/images/Home/Vector.png")} />
              <Text style={styles.footertext}>Assets Stat</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.footerBtn}>
              <Image source={require("../assets/images/Home/Vector1.png")} />
              <Text style={styles.footertext}>Transfer</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.footerBtn}>
              <Image source={require("../assets/images/Home/Vector2.png")} />
              <Text style={styles.footertext}>Buy / Sell</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight>
            <View style={styles.footerBtn}>
              <Image source={require("../assets/images/Home/Vector3.png")} />
              <Text style={styles.footertext}>Security</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#171429",
    flex: 1,
  },
  text: {
    color: "white",
    // paddingTop: 10,
  },
  footertext: {
    color: "white",
    paddingTop: 10,
    fontSize: 12,
  },
  header: {
    borderColor: "red",
    borderWidth: 2,
    flex: 1,
    // width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  footer: {
    position: "absolute",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 0,
    height: 80,
    backgroundColor: "#0F0D1C",
    // borderWidth: 2,
    // borderColor: "white",
    width: "100%",
    // paddingVertical: 10,
  },
  footerBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Home2;
