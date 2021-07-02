import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TouchableHighlight,
  TextInput,
  Image,
} from "react-native";

import { Picker } from "@react-native-picker/picker";
// #171429
// #221D3B
// #2D2747

class Transfer extends Component {
  state = {
    selectedLanguage: null,
    func: "send",
  };
  handleReceiveBtnPress = () => {
    this.setState({ ...this.state, func: "send" });
  };
  handleSendBtnPress = () => {
    this.setState({ ...this.state, func: "receive" });
  };
  handleConfirmBtn = () => {
    const { navigation, ConfirmTransfer } = this.props;
    navigation.navigate("ConfirmTransfer");
  };
  render() {
    const { selectedLanguage, func } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View
          style={{
            backgroundColor: "#171429",
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 15,
          }}
        >
          <Image source={require("../assets/images/Home/navbarBTn.png")} />
          <Text
            style={{
              color: "white",
            }}
          >
            ZENITH WALLET
          </Text>
          <Image source={require("../assets/images/Home/scan.png")} />
        </View>
        <ScrollView style={styles.scrollView}>
          <View>
            <View style={styles.cont1}>
              <Text style={styles.cont1Text}>Select Asset</Text>
              <View style={styles.picker}>
                <Text style={styles.pickerText}>ZTC</Text>
              </View>
            </View>
            <View style={styles.cont2}>
              <View style={styles.cont2BTnCont}>
                <TouchableHighlight
                  onPress={this.handleReceiveBtnPress}
                  style={
                    func === "receive" ? styles.cont2Btn : styles.cont2BtnActive
                  }
                >
                  <Text style={styles.cont2BtnText}>Receive</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={this.handleSendBtnPress}
                  style={
                    func === "send" ? styles.cont2Btn : styles.cont2BtnActive
                  }
                >
                  <Text style={styles.cont2BtnText}>Send</Text>
                </TouchableHighlight>
              </View>
              {func === "receive" ? (
                <View style={styles.cont2Content}>
                  <View style={styles.impCont}>
                    <Text style={{ color: "white", marginBottom: 4 }}>
                      Recipient Address
                    </Text>
                    <View style={styles.textInputCont}>
                      <TextInput style={styles.textInput} />
                      <TouchableHighlight style={styles.textInputBtn}>
                        <Image
                          source={require("../assets/images/Transfer/Vector.png")}
                        />
                      </TouchableHighlight>
                    </View>
                  </View>
                  <View style={{ marginTop: 20, marginBottom: 3 }}>
                    <Text style={{ color: "white", marginBottom: 4 }}>
                      Amount to Transfer
                    </Text>
                    <View style={styles.textInputCont}>
                      <TextInput style={styles.textInput} />
                      <TouchableHighlight style={styles.textInputBtn}>
                        <Text style={{ color: "white" }}>MAX</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                  <Text style={{ color: "white" }}>Balance:1.08483027201</Text>
                  <Text style={{ color: "#26B8FE", marginTop: 40 }}>
                    Network Fees: 0.9862398127
                  </Text>
                  <View style={styles.btnCont}>
                    <TouchableHighlight style={styles.cancelBtn}>
                      <Text
                        style={{
                          color: "white",
                          textAlign: "center",
                          marginHorizontal: 5,
                        }}
                      >
                        Cancel
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                      onPress={this.handleConfirmBtn}
                      style={styles.confirmBtn}
                    >
                      <Text style={{ color: "white", textAlign: "center" }}>
                        Confirm
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              ) : (
                <View style={styles.receiveCont}>
                  <Image
                    source={require("../assets/images/Transfer/qrcode.png")}
                  />
                  <Text
                    style={{
                      color: "white",
                      backgroundColor: "#2D2747",
                      padding: 10,
                      width: "60%",
                      textAlign: "center",
                      borderRadius: 10,
                      marginTop: 10,
                    }}
                  >
                    f2e3Fedaf....af2e3Feda
                  </Text>
                  <View style={styles.receiveBtnCont}>
                    <TouchableHighlight>
                      <Text
                        style={{
                          color: "#26B8FE",
                        }}
                      >
                        Tap to Copy
                      </Text>
                    </TouchableHighlight>
                    <TouchableHighlight>
                      <Text
                        style={{
                          color: "#26B8FE",
                        }}
                      >
                        Share QR
                      </Text>
                    </TouchableHighlight>
                  </View>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
  header: {
    // position: "absolute",
    top: 0,
    // borderColor: "red",
    // borderWidth: 2,
    // flex: 1,
    width: "100%",
    // height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  text: {
    color: "white",
    // paddingTop: 10,
  },
  scrollView: {
    backgroundColor: "#171429",
    // backgroundColor: "white",
    paddingHorizontal: 20,
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#221D3B",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  cont1Text: {
    color: "white",
  },
  picker: {
    backgroundColor: "#2D2747",
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 150,
    textAlign: "center",
    borderRadius: 5,
  },
  pickerText: {
    color: "white",
    textAlign: "center",
  },
  cont2: {
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "#221D3B",
    padding: 15,
    borderRadius: 5,
  },
  cont2BTnCont: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cont2Btn: {
    borderWidth: 2,
    borderColor: "#2D2747",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "50%",
    borderRadius: 5,
    // borderColor: "white",
  },
  cont2BtnActive: {
    borderRadius: 5,
    borderWidth: 2,
    backgroundColor: "#2D2747",
    borderColor: "#2D2747",
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: "50%",
  },
  cont2BtnText: {
    color: "white",
    textAlign: "center",
  },
  text: {
    fontSize: 45,
  },
  btnCont: {
    flexDirection: "row",
    // justifyContent: "space-between",
    marginVertical: 40,
  },
  confirmBtn: {
    backgroundColor: "#26B8FE",
    borderRadius: 22.5,
    padding: 10,
    width: 150,
    // marginHorizontal: 5,
  },
  cancelBtn: {
    padding: 10,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    width: 150,
    // marginHorizontal: 5,
    marginLeft: 0,
  },
  textInputCont: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderColor: "white",
    borderWidth: 1,
  },
  textInput: {
    width: "80%",
    // borderColor: "white",
    // borderWidth: 1,
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,

    color: "white",
  },
  textInputBtn: {
    marginHorizontal: 10,
  },
  impCont: {
    marginVertical: 20,
  },
  receiveCont: {
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2,
    marginVertical: 40,
  },
  receiveBtnCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    // borderWidth: 2,
    width: "100%",
    marginVertical: 10,
  },
});

export default Transfer;
