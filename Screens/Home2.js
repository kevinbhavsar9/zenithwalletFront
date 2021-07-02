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
        <View style={styles.body}>
          <View style={styles.balance}>
            <Text style={styles.balanceText}>BALANCE</Text>
            <Text style={styles.balanceText2}>$ 4,000.00</Text>
          </View>
          <View style={styles.assets}>
            <Text style={styles.assetText}>All Assets</Text>
            <View style={styles.cardCont}>
              <View style={styles.card}>
                <Image source={require("../assets/images/Home/Ellipse.png")} />
                <Text style={styles.cardText}>BTC</Text>
              </View>
              <View style={styles.card}></View>
              <View style={styles.card}></View>
            </View>
          </View>
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
    position: "absolute",
    top: 0,
    // borderColor: "red",
    // borderWidth: 2,
    flex: 1,
    width: "100%",
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

  body: {
    flex: 1,
    // borderColor: "blue",
    // borderWidth: 2,
    position: "absolute",
    top: 60,
    width: "100%",
    height: "100%",
    // justifyContent: "center",
    alignItems: "center",
  },
  balance: {
    height: 156,
    backgroundColor: "#221D3B",
    width: "90%",
    margin: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 20,
  },
  balanceText: {
    color: "white",
    fontSize: 12,
  },
  balanceText2: {
    color: "white",
    fontSize: 36,
  },
  assets: {
    // borderWidth: 2,
    // borderColor: "white",
    width: "90%",
    height: "100%",
    flex: 1,
  },
  assetText: {
    color: "white",
    paddingVertical: 10,
  },
  card: {
    backgroundColor: "#221D3B",
    width: "100%",
    height: 70,
    borderRadius: 10,
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  cardText: {
    color: "white",
    fontSize: 24,
    marginHorizontal: 35,
  },
});
export default Home2;
