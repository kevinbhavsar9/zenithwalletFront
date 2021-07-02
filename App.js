import { StatusBar } from "expo-status-bar";
// import "./shim.js";
import "./global";
// const Web3 = require("web3");
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardNCreateN from "./routes/oncn";
import OnBoardYCreateN from "./routes/oycn";
import SplashScreen from "./Screens/SplashScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tabs from "./routes/Tabs";
import Transfer from "./routes/Transfer";
import UserContext from "./Context/UserContext";

class App extends Component {
  state = {
    isOnBoarded: null,
    isCreated: null,
    isLoading: true,
    isLoggedIn: false,
    credentials: {},
  };
  async componentDidMount() {
    // console.log("mounted");
    // const web3 = new Web3(
    //   new Web3.providers.HttpProvider(
    //     "https://mainnet.infura.io/v3/995836361fcf4f31a3aad338627d4453"
    //   )
    // );
    // web3.eth.getBlock("latest").then(console.log);

    try {
      const Board = await AsyncStorage.getItem("isOnBoarded");
      const Create = await AsyncStorage.getItem("isCreated");
      this.setState({
        isCreated: Create,
        isOnBoarded: Board,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
    this.signin = this.signin.bind(this);
    this.signout = this.signout.bind(this);
  }
  signin = () => {
    this.setState({ ...this.state, isLoggedIn: true });
  };
  signout = () => {
    this.setState({ ...this.state, isLoggedIn: false });
  };
  text = () => {
    const { isCreated, isOnBoarded, isLoading } = this.state;

    if (isCreated && isOnBoarded) {
      return <Login />;
    } else {
      if (this.state.isOnBoarded) {
        return <OnBoardYCreateN />;
      } else {
        return <OnBoardNCreateN />;
      }
    }

    console.log(this.state);
  };
  render() {
    const { isCreated, isOnBoarded, isLoading } = this.state;
    const values = {
      isLoggedIn: this.state.isLoggedIn,
      signin: this.signin,
      signout: this.signout,
      credentials: this.state.credentials,
    };
    // return (
    //   // <NavigationContainer>
    //   //   <Tabs />
    //   // </NavigationContainer>
    //   // <ConfirmTransfer />
    // );

    return (
      <UserContext.Provider value={values}>
        <>{isLoading ? <SplashScreen /> : this.text()}</>
      </UserContext.Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
