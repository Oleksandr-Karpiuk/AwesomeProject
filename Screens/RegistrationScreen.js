import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const RegistrationScreen = () => (
  <View style={styles.container}>
    <View style={styles.photoContainer}></View>
    <TouchableOpacity activeOpacity={0.8} style={styles.photoBtn}>
      <Text style={styles.photoBtnText}>&#10011;</Text>
    </TouchableOpacity>
    <View style={styles.form}>
      <View style={{ marginTop: 92 }}>
        <Text style={styles.title}>Реєстрація</Text>
      </View>
      <View style={{ marginTop: 32 }}>
        <TextInput style={styles.input} />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput style={styles.input} />
      </View>
      <View style={{ marginTop: 16 }}>
        <TextInput style={styles.input} secureTextEntry={true} />
      </View>
      <TouchableOpacity activeOpacity={0.8} style={styles.button}>
        <Text style={styles.textBtn}>Зареєструватися</Text>
      </TouchableOpacity>
    </View>
    <View style={{ marginTop: 16, marginBottom: 78 }}>
      <Text style={styles.link}>Вже є акаунт? Увійти</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photoContainer: {
    position: "absolute",
    left: 128,
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  photoBtn: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    position: "absolute",
    top: 21,
    left: 235,
    zIndex: 1,
    width: 25,
    height: 25,
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 25,
    backgroundColor: "#FFFFFF",
  },
  photoBtnText: {
    color: "#FF6C00",
  },
  title: {
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    color: "#212121",
  },
  form: {
    marginHorizontal: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    height: 50,
    padding: 16,
    color: "#212121",
  },
  button: {
    marginTop: 59,
    height: 51,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  textBtn: {
    padding: 16,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  link: {
    textAlign: "center",
  },
});

export default RegistrationScreen;
