import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, Image, View, Text } from "react-native";
import React, { Component } from "react";
import Home from "../Screens/Home2";
import Transfer from "../routes/Transfer";
import Buy from "../Screens/Buy";
import Security from "../Screens/Security";

const Tab = createBottomTabNavigator();

class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: "#0F0D1C",
            height: 80,
            borderTopColor: "#0F0D1C",
          },
        }}
      >
        <Tab.Screen
          name="Assets Stat"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <Image source={require("../assets/images/Home/Vector.png")} />
                ) : (
                  <Image
                    source={require("../assets/images/Transfer/Vic1.png")}
                  />
                )}

                <Text
                  style={{
                    color: focused ? "white" : "#221D3B",
                    paddingVertical: 8,
                  }}
                >
                  Assets Stat
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <Image
                    source={require("../assets/images/Transfer/Vic3.png")}
                  />
                ) : (
                  <Image
                    source={require("../assets/images/Transfer/Vic2.png")}
                  />
                )}

                <Text
                  style={{
                    color: focused ? "white" : "#221D3B",
                    paddingVertical: 8,
                  }}
                >
                  Transfer
                </Text>
              </View>
            ),
          }}
          name="Transfer"
          component={Transfer}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <Image source={require("../assets/images/Transfer/jp.png")} />
                ) : (
                  <Image
                    source={require("../assets/images/Home/Vector2.png")}
                  />
                )}

                <Text
                  style={{
                    color: focused ? "white" : "#221D3B",
                    paddingVertical: 8,
                  }}
                >
                  Assets Stat
                </Text>
              </View>
            ),
          }}
          name="Buy / Sell"
          component={Buy}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {focused ? (
                  <Image
                    source={require("../assets/images/Transfer/Vic4.png")}
                  />
                ) : (
                  <Image
                    source={require("../assets/images/Home/Vector3.png")}
                  />
                )}

                <Text
                  style={{
                    color: focused ? "white" : "#221D3B",
                    paddingVertical: 8,
                  }}
                >
                  Security
                </Text>
              </View>
            ),
          }}
          name="Security"
          component={Security}
        />
      </Tab.Navigator>
    );
  }
}

const style = StyleSheet.create({});

export default Tabs;
