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
import SwipeButton from "rn-swipe-button";
import CheckBox from "@react-native-community/checkbox";
// import SwipeBtn from "./SwipeBtn";
class ConfirmTransfer extends Component {
  state = {
    toogle: false,
  };
  handleBackBtn = () => {
    const { navigation } = this.props;
    navigation.goBack();
  };
  // handleToggle = (value) => {
  //   this.setState({ toggle: value });
  // };
  render() {
    const { toogle } = this.state;
    return (
      <SafeAreaView style={[styles.container]}>
        <TouchableHighlight onPress={this.handleBackBtn} style={styles.backbtn}>
          <Image source={require("../assets/images/ImportWallet/Arrow.png")} />
        </TouchableHighlight>
        <View style={styles.fcontainer}>
          <Text
            style={{
              color: "white",
              lineHeight: 28,
              fontSize: 24,
              paddingVertical: 10,
            }}
          >
            You are about to send
          </Text>
          <Text
            style={{
              color: "#26B8FE",
              fontSize: 36,
              lineHeight: 43,
              paddingBottom: 10,
            }}
          >
            1.234 BTC
          </Text>
          <Image
            style={{ width: 110, height: 110 }}
            source={require("../assets/images/Home/Ellipse.png")}
          />
        </View>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            // borderWidth: 2,
            width: "80%",
            paddingVertical: 5,
            marginTop: 240,
          }}
        >
          Recipient:
        </Text>
        <Text
          style={{
            color: "white",
            textAlign: "left",
            width: "80%",
            paddingVertical: 5,
          }}
        >
          f2e3Fedaf2ee3Fedaeedaf2e3Feda
        </Text>
        <Text
          style={{
            color: "#26B8FE",
            textAlign: "left",
            width: "80%",
            paddingVertical: 15,
          }}
        >
          Network Fees: 0.0000032 BTC
        </Text>
        <View style={styles.cont2}>
          <CheckBox
            style={{ marginRight: 10 }}
            disabled={false}
            value={this.state.toogle}
            onValueChange={(newValue) => this.setState({ toogle: newValue })}
          />
          <Text style={{ color: "white", paddingRight: 20 }}>
            I agree that this charge is irreversible once transfered.
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          {/* <SwipeBtn /> */}
          <SwipeButton
            disabled={false}
            swipeSuccessThreshold={60}
            height={55}
            width={330}
            thumbIconStyles={{ width: 40 }}
            title="Swipe to Compelete"
            titleFontSize={13}
            onSwipeSuccess={() => {
              alert("Submitted");
            }}
            titleColor="white"
            // railFillBackgroundColor="red"
            thumbIconImageSource={require("../assets/images/Transfer/Arrow.png")}
            railBorderColor="#221D3B"
            thumbIconBorderColor="#221D3B"
            thumbIconStyles={{ borderWidth: 3 }}
            thumbIconBackgroundColor="#171429"
            railBackgroundColor="#221D3B"
          ></SwipeButton>
        </View>
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

  backbtn: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginBottom: 25,
    position: "absolute",
    top: 0,
    zIndex: 100,
    left: 0,
  },
  fcontainer: {
    position: "absolute",
    top: 70,
    // borderColor: "white",
    // borderWidth: 2,
    // flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  cont2: {
    flexDirection: "row",
    width: "83%",
    // paddingTop: 150,
    marginTop: 70,
  },
});

export default ConfirmTransfer;
