import React, { Component } from "react";
import { Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
class Buy extends Component {
  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          top: 100,
        }}
      >
        <Text>Buy</Text>
        <QRCode value="https://github.com/kevinbhavsar9" />
      </View>
    );
  }
}

export default Buy;
