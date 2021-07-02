import React, { Component } from "react";

import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import { useFonts } from "expo-font";
import { Font } from "expo";

class SplashScreen extends Component {
  state = {};
  // componentDidMount() {
  //   Font.loadAsync({
  //     Rubik: require("../assets/fonts/Rubik.ttf"),
  //   });
  // }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.dot1}
          source={require("../assets/images/SplashScreen/dot.png")}
        />

        <Image
          style={styles.dot2}
          source={require("../assets/images/SplashScreen/dot2.png")}
        />
        <Image
          style={styles.dot3}
          source={require("../assets/images/SplashScreen/dot3.png")}
        />

        <Image
          style={styles.logo}
          source={require("../assets/images/SplashScreen/logo.png")}
        />
        <Text style={styles.text}>ZENITH WALLET</Text>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#171429",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Rubik",
    fontWeight: "bold",
    fontSize: 24,
    lineHeight: 28,
    position: "absolute",
    top: "74.42%",
  },
  logo: {
    position: "absolute",
    top: "52.8%",
  },
  dot1: {
    position: "absolute",
    left: 0,
    top: "23.23%",
  },
  dot2: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  dot3: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default SplashScreen;
