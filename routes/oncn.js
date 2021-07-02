import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Onboarding from "../Screens/Onboarding";
import WalletCreate from "../Screens/WalletCreate";
import CreateWalletPhrase from "../Screens/CreateWalletPhrase";
import ImportWallet from "../Screens/ImportWallet";
import ConfirmWallet from "../Screens/ConfirmWalletPhrase";
import Password from "../Screens/Password";
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
        <Stack.Screen
          name="ConfirmWallet"
          component={ConfirmWallet}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Password"
          component={Password}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
