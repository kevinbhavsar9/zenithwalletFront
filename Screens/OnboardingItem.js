import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";

OnboardingItem = ({ item }) => {
  const { width } = useWindowDimensions();
  return (
    <View style={[styles.container, { width }]}>
      <Image
        source={item.image}
        style={[
          styles.image,
          { width: "80%", marginTop: 100, resizeMode: "contain" },
        ]}
      />

      <View style={{ flex: 0.3 }}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default OnboardingItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 0.7,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    marginBottom: 10,
    color: "white",
    textAlign: "center",
    marginTop: 30,
  },
});
