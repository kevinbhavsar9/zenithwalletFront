import React, { Component } from "react";
import { createWallet } from "../api";
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

class ImportWallet extends Component {
  constructor(props) {
    super(props);
    const { route } = this.props;
    let phrase = JSON.parse(route.params.phrase);
    this.state = {
      correctPhrase: phrase,
      shufflePhrase: this.shuffle(phrase),
      userAdd: [],
    };
  }

  shuffle = (array) => {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };
  checkArray = (a1, a2) => {
    if (a1.length != a2.length) {
      console.log("length not equal");
      return false;
    } else {
      for (let i = 0; i < a1.length; i++) {
        if (a1[i] != a2[i]) {
          console.log(`element ${i}`);
          return false;
        }
        console.log("true");
        return true;
      }
    }
  };

  handlePhraseBtn = (index) => {
    const { shufflePhrase, userAdd } = this.state;
    let array = shufflePhrase.filter((word) => word !== shufflePhrase[index]);
    let element = shufflePhrase[index];
    this.setState({
      ...this.state,
      userAdd: [...userAdd, element],
      shufflePhrase: array,
    });
  };
  handleCreateBtn = async () => {
    const { navigation, route } = this.props;
    const { correctPhrase, userAdd } = this.state;

    if (this.checkArray(JSON.parse(route.params.phrase), userAdd)) {
      let wallet = await createWallet();
    } else {
      alert("Please add correct phrase");
    }

    // try {
    //   let wallet = await createWallet(JSON.parse(route.params.phrase));
    // } catch (error) {
    //   console.log(error);
    // }
    navigation.navigate("Password");
  };
  handleClearBtn = () => {
    const { correctPhrase } = this.state;
    const shuffle = this.shuffle(correctPhrase);
    this.setState({
      ...this.state,
      shufflePhrase: shuffle,
      userAdd: [],
    });
  };
  render() {
    const { navigation, route } = this.props;
    const { userAdd, shufflePhrase } = this.state;

    return (
      <SafeAreaView style={styles.container}>
        {/* <ScrollView style={styles.scrollView}> */}
        <TouchableHighlight style={styles.backbtn}>
          <Image source={require("../assets/images/ImportWallet/Arrow.png")} />
        </TouchableHighlight>
        <View style={styles.ViewContainer}>
          <View style={styles.ViewChild}>
            <Text style={styles.text}>
              Select these 12 keywords in sequential order as shown previously.
            </Text>
            <View style={styles.seedPhrase}>
              {userAdd
                ? userAdd.map((word, index) => (
                    <Text
                      key={index}
                      style={[
                        styles.phrase,
                        { color: "white", textAlign: "center" },
                      ]}
                    >
                      {word}
                    </Text>
                  ))
                : null}
            </View>
          </View>

          <View style={styles.phraseCont}>
            {shufflePhrase.map((word, index) => (
              <TouchableHighlight
                onPress={() => this.handlePhraseBtn(index)}
                key={index}
                style={styles.phrase}
              >
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {word}
                </Text>
              </TouchableHighlight>
            ))}
          </View>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableHighlight
              onPress={this.handleClearBtn}
              style={styles.button2}
            >
              <Text style={[styles.buttonText, { color: "red" }]}>Clear</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={this.handleCreateBtn}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Create Wallet</Text>
            </TouchableHighlight>
          </View>
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
  backbtn: {
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginBottom: 25,
    position: "absolute",
    top: 0,
    left: 0,
  },

  ViewContainer: {
    position: "absolute",
    top: 55,
    width: "90%",
    height: 600,
    backgroundColor: "#221D3BCC",
    borderRadius: 15,
    paddingVertical: 30,
    marginTop: 10,
    zIndex: 2,
  },
  ViewChild: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  ViewChildPass: { paddingHorizontal: 20, paddingVertical: 15 },
  seedPhrase: {
    marginTop: 28,
    borderWidth: 0.6,
    height: 190,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    flexWrap: "wrap",
    flexDirection: "row",
  },

  text: {
    // position: "absolute",
    // top: "46.1%",
    fontSize: 12,
    lineHeight: 14,
    color: "#E5E5E5",

    // fontWeight: "bold",
  },
  textInput: {
    borderWidth: 0.6,
    marginVertical: 10,
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  passwordCont: {
    marginTop: 50,
  },
  button: {
    // position: "absolute",
    backgroundColor: "#26B8FE",
    borderRadius: 22.5,
    // width: "72.2%",
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    marginTop: 40,
    // top: "73.93%",
    width: "45%",
  },
  button2: {
    width: "45%",
    // backgroundColor: "#26B8FE",
    borderColor: "red",
    borderWidth: 2,
    borderRadius: 22.5,
    // width: "72.2%",
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginHorizontal: 10,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    lineHeight: 17,
    textAlign: "center",
  },

  touchable: {
    position: "absolute",
    top: "84.09%",
  },
  touchableText: {
    color: "#26B8FE",
    fontSize: 14,
    lineHeight: 17,
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
    // width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 20,
    // height: "50%",
    // position: "relative",
  },
  phrase: {
    backgroundColor: "#3B3753",
    borderRadius: 5,
    marginHorizontal: 6,
    width: "28%",
    marginVertical: 10,
    // paddingVertical: 40,
    height: 25,
  },
});

export default ImportWallet;
