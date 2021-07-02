import React, { Component } from "react";
import {
  View,
  Image,
  SafeAreaView,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Button,
  TouchableHighlight,
  TextInput,
  ScrollView,
} from "react-native";

class Login extends Component {
  handleCreateWalletButton = () => {
    console.log("button tapped");
  };
  render() {
    return (
      // <ScrollView style={styles.scrollView}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.dot1}
          source={require("../assets/images/WalletCreate/dot1.png")}
        />
        <Image
          style={styles.logo}
          source={require("../assets/images/WalletCreate/logo.png")}
        />
        <Text style={styles.text}>ZENITH WALLET</Text>

        <View style={styles.passwordcont}>
          <Text style={styles.passwordText}>Enter Password</Text>
          <TextInput secureTextEntry={true} style={styles.passwordTextInput} />
        </View>

        <TouchableHighlight
          onPress={this.handleCreateWalletButton}
          style={styles.button}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableHighlight>

        <Image
          style={styles.dot2}
          source={require("../assets/images/WalletCreate/dot2.png")}
        />
      </SafeAreaView>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#171429",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    height: "100%",
  },
  passwordcont: {
    position: "absolute",
    flex: 1,
    width: "70%",
    // borderWidth: 2,
    // borderColor: "white",
    bottom: "30%",
  },
  passwordText: {
    color: "white",
    textAlign: "left",
  },
  passwordTextInput: {
    borderColor: "white",
    borderWidth: 0.6,
    borderRadius: 5,
    marginTop: 10,
    padding: 6,
    color: "white",
  },
  logo: {
    position: "absolute",
    top: "24.49%",
  },
  text: {
    position: "absolute",
    top: "46.1%",
    fontSize: 24,
    lineHeight: 28,
    color: "white",
    fontWeight: "bold",
  },
  button: {
    position: "absolute",
    backgroundColor: "#26B8FE",
    borderRadius: 22.5,
    width: "70%",
    paddingVertical: 14,
    paddingHorizontal: 90,
    top: "73.93%",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
  },
  touchable: {
    position: "absolute",
    top: "84.09%",
  },
  touchableText: {
    color: "#26B8FE",
    fontSize: 14,
    lineHeight: 17,
  },
  dot2: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  dot1: {
    position: "absolute",
    top: "6.41%",
    left: "6.08%",
  },
});

export default Login;
