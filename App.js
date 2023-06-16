// import React, { useCallback } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import RegistrationScreen from "./Screens/RegistrationScreen";
import { useFonts, Roboto } from "@expo-google-fonts/roboto";

const App = () => {
  let [fontsLoaded] = useFonts({
    Roboto,
  });

  // if (!fontsLoaded) {
  //   return null;
  // }

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
    fontFamily: "Roboto",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
});

export default App;
