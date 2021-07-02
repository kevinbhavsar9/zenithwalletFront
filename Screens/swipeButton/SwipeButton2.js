import React, { Component } from "react";
import { View, Text, SafeAreaView } from "react-native";
import SwipeButton from "rn-swipe-button";

class SwipeButton2 extends Component {
  render() {
    return (
      <SafeAreaView>
        <View style={{ padding: 15 }}>
          <Text
            style={{
              fontSize: 30,
              marginVertical: 40,
              textAlign: "center",
            }}
          >
            lskndvl
          </Text>
          <SwipeButton
            disabled={false}
            swipeSuccessThreshold={70}
            height={45}
            width={330}
            title="Submit"
            onSwipeSuccess={() => {
              alert("Submitted");
            }}
            titleColor="white"
            railFillBackgroundColor="red"
            // railFillBorderColor="black"
            // railBorderColor="green"
            thumbIconImageSource={require("../../assets/images/Transfer/Arrow.png")}
            thumbIconBorderColor="blue"
            thumbIconBackgroundColor="yellow"
            railBackgroundColor="pink"
          ></SwipeButton>
        </View>
      </SafeAreaView>
    );
  }
}

export default SwipeButton2;
