import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
} from "react-native";
import WalletCreate from "./WalletCreate";

class Onboarding extends Component {
  handleBtnPress = async () => {
    console.log("hoio");
    const { navigation, WalletCreate } = this.props;
    // navigation.navigate("WalletCreate");
    console.log(navigation);
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("../assets/images/Onboard/OBJECTS.png")} />
        <Text style={styles.mainText}>Every Thing in your fingertips</Text>
        <View style={styles.progressCont}>
          <View style={styles.progressBtnActive}>
            <Text></Text>
          </View>
          <View style={styles.progressBtn}>
            <Text></Text>
          </View>
          <View style={styles.progressBtn}>
            <Text></Text>
          </View>
        </View>
        <TouchableHighlight onPress={this.handleBtnPress}>
          <View style={styles.btnContainer}>
            <Image source={require("../assets/images/Onboard/Arrow.png")} />
          </View>
        </TouchableHighlight>
        {/* <Button title="next" onPress={() => console.log("pressed")} /> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#171429",
    flex: 1,
    alignItems: "center",
    padding: 50,
  },
  mainText: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    padding: 20,
  },
  btnContainer: {
    borderWidth: 3,
    borderColor: "#26B8FE",
    padding: 20,
    borderRadius: 42,
  },
  progressCont: {
    flexDirection: "row",
  },
  progressBtn: {
    marginHorizontal: 20,
    marginBottom: 80,
    marginTop: 20,
    backgroundColor: "#221D3B",
    height: 10,
    width: 10,
    borderRadius: 10,
  },
  progressBtnActive: {
    marginTop: 20,
    marginBottom: 80,
    marginHorizontal: 20,
    backgroundColor: "#26B8FE",
    height: 10,
    width: 10,
    borderRadius: 10,
    borderWidth: 6,
    borderColor: "#26B8FE",
  },
});
export default Onboarding;
