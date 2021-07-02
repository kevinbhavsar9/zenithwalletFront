import React, { Component } from "react";
import { generateMnemonic } from "../api";
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
} from "react-native";

class WalletCreate extends Component {
  handleCreateWalletButton = async () => {
    try {
      let res = await generateMnemonic();
      let phrase = res.data.split(" ");
      console.log(phrase);
      const { navigation, CreateWalletPhrase } = this.props;
      navigation.navigate("CreateWalletPhrase", { phrase: phrase });
    } catch (error) {
      console.log(error);
    }
  };
  handleImportButton = () => {
    const { navigation, ImportWallet } = this.props;
    navigation.navigate("ImportWallet");
  };
  handleBackBtn = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  render() {
    return (
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
        {/* <Button
          style={styles.button}
          title="Create New Wallet"
          onPress={this.handleCreateWalletButton}
        /> */}
        <TouchableHighlight
          onPress={this.handleCreateWalletButton}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Create New Wallet</Text>
        </TouchableHighlight>

        <TouchableHighlight
          onPress={this.handleImportButton}
          style={styles.touchable}
        >
          <Text style={styles.touchableText}>Import Seed Phrase</Text>
        </TouchableHighlight>

        <Image
          style={styles.dot2}
          source={require("../assets/images/WalletCreate/dot2.png")}
        />
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
    // width: "72.2%",
    paddingVertical: 14,
    paddingHorizontal: 90,
    top: "73.93%",
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

export default WalletCreate;
