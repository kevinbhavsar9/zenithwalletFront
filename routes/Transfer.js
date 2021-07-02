import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Transfer from "../Screens/Transfer";
import ConfirmTransfer from "../Screens/ConfirmTrans";

const Stack = createStackNavigator();
export default function Route() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ConfirmTransfer"
        component={ConfirmTransfer}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
