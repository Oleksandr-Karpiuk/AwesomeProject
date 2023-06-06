import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RegistrationScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Need to create form</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    padding: 40,
    width: 400,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
});

export default RegistrationScreen;
