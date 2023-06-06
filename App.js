// import React, { useCallback } from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
// import { useFonts } from "expo-font";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/bg-img.png")}
        style={styles.image}
      >
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});

export default App;
