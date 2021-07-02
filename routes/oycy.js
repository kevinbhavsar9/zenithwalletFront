import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../Screens/Login";
const Stack = createStackNavigator();
export default function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoard"
          component={Onboarding}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="WalletCreate"
          component={WalletCreate}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="CreateWalletPhrase"
          component={CreateWalletPhrase}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ImportWallet"
          component={ImportWallet}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
