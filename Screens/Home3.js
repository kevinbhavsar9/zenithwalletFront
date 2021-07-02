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
    console.log("home");
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
            <View style={styles.view1}>
              <View style={styles.carde}>
                <Image source={require("../assets/images/Home/Ellipse.png")} />
                <Text style={styles.cardText}>BTC</Text>
              </View>
              <View style={styles.child2}>
                <Text style={styles.child2Text1}>Balance</Text>
                <Text style={styles.child2Text2}>348.0001</Text>
              </View>
            </View>

            <View style={styles.view2}>
              <TouchableHighlight style={styles.view2btn}>
                <Text style={styles.view2btnText}>Send</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.view2btn}>
                <Text style={styles.view2btnText}>Receive</Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.view2btn}>
                <Text style={styles.view2btnText}>Buy</Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.assets}>
            <Text style={styles.assetText}>All Transactions</Text>
            <View style={styles.cardCont}>
              <View style={styles.card}>
                <View style={styles.cardChild1}>
                  <Text style={styles.cardChild1Texthead}>
                    Contract Interaction
                  </Text>
                  <Text style={styles.cardChild2Texthead}>
                    0.00042<Text style={styles.cardChild2Text}>( $0.003 )</Text>
                  </Text>
                </View>
                <View style={styles.cardChild2}>
                  <Text style={styles.cardChild2Text}>24 Jun 21</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardChild1}>
                  <Text style={styles.cardChild1Texthead}>
                    Contract Interaction
                  </Text>
                  <Text style={styles.cardChild2Texthead}>
                    0.00042<Text style={styles.cardChild2Text}>( $0.003 )</Text>
                  </Text>
                </View>
                <View style={styles.cardChild2}>
                  <Text style={styles.cardChild2Text}>24 Jun 21</Text>
                </View>
              </View>
              <View style={styles.card}>
                <View style={styles.cardChild1}>
                  <Text style={styles.cardChild1Texthead}>
                    Contract Interaction
                  </Text>
                  <Text style={styles.cardChild2Texthead}>
                    0.00042<Text style={styles.cardChild2Text}>( $0.003 )</Text>
                  </Text>
                </View>
                <View style={styles.cardChild2}>
                  <Text style={styles.cardChild2Text}>24 Jun 21</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
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
    // justifyContent: "center",
    alignItems: "flex-start",
    padding: 5,
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
  carde: {
    backgroundColor: "#221D3B",
    width: "100%",
    height: 70,
    borderRadius: 10,
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    // borderWidth: 2,
    // borderColor: "white",
  },
  cardText: {
    color: "white",
    fontSize: 24,
    marginHorizontal: 18,
  },
  view1: {
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "white",
    width: "100%",
    position: "relative",
  },
  child2: {
    position: "absolute",
    right: 10,
    top: 15,
    alignItems: "flex-end",
  },
  child2Text1: {
    color: "white",
    fontSize: 14,
  },
  child2Text2: {
    color: "#26B8FE",
    fontSize: 24,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-around",
    // borderColor: "red",
    // borderWidth: 2,
    width: "100%",
    paddingVertical: 20,
  },
  view2btn: {
    backgroundColor: "#171429",
    paddingHorizontal: 25,
    paddingVertical: 6,
    borderRadius: 16,
    width: 96,
  },
  view2btnText: {
    color: "white",
    fontSize: 12,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#221D3B",
    width: "100%",
    height: 75,
    borderRadius: 10,
    marginVertical: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    // alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // borderWidth: 2,
    // borderColor: "white",
  },
  cardChild1: {
    // paddingVertical: 5,
  },
  cardChild1Texthead: {
    color: "white",
    fontSize: 18,
    paddingBottom: 5,
  },
  cardChild2Texthead: {
    color: "#FF5A5A",
    fontSize: 13,
    paddingRight: 10,
  },
  cardChild2Text: {
    color: "white",
    fontSize: 13,
    paddingLeft: 10,
  },
});
export default Home2;
