import React, { Component } from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  ScrollView,
} from "react-native";

class ImportWallet extends Component {
  handleBackBtn = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={{ flex: 1 }}>
          <TouchableHighlight
            onPress={this.handleBackBtn}
            style={styles.backbtn}
          >
            <Image
              source={require("../assets/images/ImportWallet/Arrow.png")}
            />
          </TouchableHighlight>
          <View style={styles.ViewContainer}>
            <View style={styles.ViewChild}>
              <Text style={styles.text}>Seed Phrase*</Text>
              <View>
                <TextInput style={styles.seedPhrase} />
              </View>
            </View>
            <View style={styles.passwordCont}>
              <View style={styles.ViewChildPass}>
                <Text style={styles.text}>New Password*</Text>
                <TextInput style={styles.textInput} />
              </View>
              <View style={styles.ViewChildPass}>
                <Text style={styles.text}>Confirm Password*</Text>
                <TextInput style={styles.textInput} />
              </View>
            </View>

            <TouchableHighlight style={styles.button}>
              <Text style={styles.buttonText}>Import this Wallet</Text>
            </TouchableHighlight>
          </View>
          <Image
            style={styles.dot}
            source={require("../assets/images/ImportWallet/dot.png")}
          />
        </ScrollView>
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
    // position: "relative",
  },
  // scrollView: {
  //   flex: 1,
  //   flexGrow: 1,
  // },
  backbtn: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginBottom: 25,
    position: "absolute",
    top: 0,
    left: 0,
  },

  ViewContainer: {
    position: "absolute",
    top: 55,
    width: "90%",
    height: 600,
    backgroundColor: "#221D3BCC",
    borderRadius: 15,
    paddingVertical: 30,
    marginTop: 10,
    zIndex: 2,
  },
  ViewChild: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  ViewChildPass: { paddingHorizontal: 20, paddingVertical: 15 },
  seedPhrase: {
    marginTop: 10,
    borderWidth: 0.6,
    height: 140,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },

  text: {
    // position: "absolute",
    // top: "46.1%",
    fontSize: 14,
    lineHeight: 16.59,
    color: "white",
    // fontWeight: "bold",
  },
  textInput: {
    borderWidth: 0.6,
    marginVertical: 10,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  passwordCont: {
    marginTop: 50,
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

  touchable: {
    position: "absolute",
    top: "84.09%",
  },
  touchableText: {
    color: "#26B8FE",
    fontSize: 14,
    lineHeight: 17,
  },
  dot: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});

export default ImportWallet;
