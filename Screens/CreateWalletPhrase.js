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
import BouncyCheckbox from "react-native-bouncy-checkbox";
import CheckBox from "@react-native-community/checkbox";

class ImportWallet extends Component {
  state = {
    toogle: false,
  };
  handleBackBtn = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  handleNextBtn = () => {
    const { navigation, ConfirmWallet, route } = this.props;
    let mnemonic = route.params.phrase;
    console.log(mnemonic);
    navigation.navigate("ConfirmWallet", { phrase: JSON.stringify(mnemonic) });
  };
  render() {
    const { navigation, route } = this.props;
    let mnemonic = route.params.phrase;
    const { toogle } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.scrollView}> */}
        <TouchableHighlight onPress={this.handleBackBtn} style={styles.backbtn}>
          <Image source={require("../assets/images/ImportWallet/Arrow.png")} />
        </TouchableHighlight>
        <View style={styles.ViewContainer}>
          <View style={styles.ViewChild}>
            <Text style={styles.text}>
              Please write down all 12 keywords in a safe and secure place as
              with out this seed phrase your wallet cannot be restored and
              recovered.
            </Text>
            <View style={styles.phraseCont}>
              <Text style={styles.phrase}>{mnemonic[0]}</Text>
              <Text style={styles.phrase}>{mnemonic[1]}</Text>
              <Text style={styles.phrase}>{mnemonic[2]}</Text>
              <Text style={styles.phrase}>{mnemonic[3]}</Text>
              <Text style={styles.phrase}>{mnemonic[4]}</Text>
              <Text style={styles.phrase}>{mnemonic[5]}</Text>
              <Text style={styles.phrase}>{mnemonic[6]}</Text>
              <Text style={styles.phrase}>{mnemonic[7]}</Text>
              <Text style={styles.phrase}>{mnemonic[8]}</Text>
              <Text style={styles.phrase}>{mnemonic[9]}</Text>
              <Text style={styles.phrase}>{mnemonic[10]}</Text>
              <Text style={styles.phrase}>{mnemonic[11]}</Text>
              {/* <Text style={styles.phrase}>{mnemonic[12]}</Text> */}
            </View>
          </View>
          <View style={styles.viewChild2}>
            <CheckBox
              style={styles.viewChild2Checkbox}
              disabled={false}
              value={this.state.toogle}
              onValueChange={(newValue) => this.setState({ toogle: newValue })}
            />

            <Text style={styles.viewChild2Text}>
              I agree that I have write down all the keywords in a secure place.
              Also I understand the risk of loosing this phrase.
            </Text>
          </View>
          <TouchableHighlight
            disabled={toogle ? false : true}
            style={styles.button}
            onPress={this.handleNextBtn}
          >
            <Text style={styles.buttonText}>Next Step</Text>
          </TouchableHighlight>
        </View>
        <Image
          style={styles.dot}
          source={require("../assets/images/ImportWallet/dot.png")}
        />
        {/* </ScrollView> */}
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
  phraseText: {
    color: "white",
    textAlign: "center",
  },
  backbtn: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginBottom: 25,
    position: "absolute",
    top: 0,
    left: 0,
  },

  ViewContainer: {
    position: "relative",
    top: -40,
    width: "90%",
    height: 500,
    backgroundColor: "#221D3BCC",
    borderRadius: 15,
    // borderColor: "white",
    // borderWidth: 2,
    paddingVertical: 30,
    marginTop: 10,
    zIndex: 2,
  },
  ViewChild: {
    paddingHorizontal: 13,
    paddingVertical: 5,
    // borderWidth: 2,
    // borderColor: "red",
    height: 300,
  },

  text: {
    // position: "absolute",
    // top: "46.1%",
    fontSize: 12,
    lineHeight: 14,
    color: "#E5E5E5",

    // fontWeight: "bold",
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

  dot: {
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  phraseCont: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    // borderWidth: 2,
    borderColor: "white",
    paddingVertical: 5,
    marginTop: 20,
  },
  phrase: {
    backgroundColor: "#3B3753",
    borderRadius: 5,
    marginHorizontal: 6,
    width: "29%",
    marginVertical: 10,
    // paddingHorizontal: 40,
    color: "white",
    textAlign: "center",
    height: 25,
  },
  viewChild2: {
    // borderWidth: 2,
    flexDirection: "row",
    // borderColor: "blue",
    // borderWidth: 2,
    alignItems: "center",
  },
  viewChild2Checkbox: {
    // backgroundColor: "#3B3753",
    // borderColor: "none",
    // paddingLeft: 50,
    marginLeft: 5,
  },
  viewChild2Text: {
    paddingHorizontal: 20,
    position: "relative",
    top: 0,
    right: 0,
    width: 300,
    // borderColor: "white",
    // borderWidth: 2,
    color: "white",
    fontSize: 12,
  },
});

export default ImportWallet;
