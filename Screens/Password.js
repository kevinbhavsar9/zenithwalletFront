import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  TouchableHighlight,
  View,
  TextInput,
} from "react-native";
import { Aes, generateKey, encryptData, decryptData } from "../assets/function";

class ImportWallet extends Component {
  handleCreatePassword = () => {
    let x = "kevin bhavsar";
    try {
      generateKey("Arnold", "salt", 5000, 256).then((key) => {
        console.log(key);
      });
    } catch (e) {
      console.log(e);
    }

    console.log(x);
  };
  handleBackBtn = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableHighlight onPress={this.handleBackBtn} style={styles.backbtn}>
          <Image source={require("../assets/images/ImportWallet/Arrow.png")} />
        </TouchableHighlight>
        <ScrollView style={styles.scrollView}>
          <View style={styles.ViewContainer}>
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 24,
              }}
            >
              Create Password
            </Text>
            <View style={styles.passwordCont}>
              <View style={styles.ViewChildPass}>
                <Text style={styles.text}>Password*</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} />
              </View>
              <View style={styles.ViewChildPass}>
                <Text style={styles.text}>Confirm Password*</Text>
                <TextInput style={styles.textInput} secureTextEntry={true} />
              </View>
            </View>

            <TouchableHighlight
              onPress={this.handleCreatePassword}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Create Password</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <Image
          style={styles.dot}
          source={require("../assets/images/ImportWallet/dot.png")}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#171429",
  },
  scrollView: {
    position: "relative",
    top: 2,
    // backgroundColor: "#171429",
    width: "100%",
    height: "100%",
    // borderWidth: 2,
    // borderColor: "white",
    // marginHorizontal: 20,
    // zIndex: 9999,
  },
  text: {
    fontSize: 42,
  },
  backbtn: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginBottom: 25,
    position: "absolute",
    top: 0,
    zIndex: 100,
    left: 0,
  },
  dot: {
    position: "absolute",
    right: 0,
    zIndex: -1,
    bottom: 0,
  },
  ViewContainer: {
    // position: "absolute",
    top: 55,
    // width: "90%",
    height: 650,
    backgroundColor: "#221D3BCC",
    borderRadius: 15,
    marginHorizontal: 20,
    paddingVertical: 30,
    marginTop: 1,
    // zIndex: 2,
  },
  ViewChild: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  passwordCont: {
    marginTop: 50,
  },
  ViewChildPass: { paddingHorizontal: 20, paddingVertical: 15 },
  textInput: {
    borderWidth: 0.6,
    marginVertical: 10,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  text: {
    // position: "absolute",
    // top: "46.1%",
    fontSize: 14,
    lineHeight: 16.59,
    color: "white",
    // fontWeight: "bold",
  },
  seedPhrase: {
    marginTop: 10,
    borderWidth: 0.6,
    height: 140,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    color: "white",
  },
  button: {
    // position: "absolute",
    backgroundColor: "#26B8FE",
    borderRadius: 22.5,
    // width: "72.2%",
    paddingVertical: 14,
    paddingHorizontal: 50,
    marginHorizontal: 20,
    marginVertical: 30,
    // top: "73.93%",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
  },
});

export default ImportWallet;
