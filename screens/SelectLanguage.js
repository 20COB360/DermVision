import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function SelectLanguage({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
      <Image
            source={require("../static/logo.png")}
            style={styles.logo}
          />
      </View>
      <View style={styles.box}>
        <Text style={{ fontSize: 25, fontWeight: "bold", opacity: 1 }}>
          Select your language
        </Text>
      </View>

      <Pressable
        android_ripple={{ color: "#eee", radius: 80 }}
        style={styles.btn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>Device (auto detect)</Text>
      </Pressable>
      <Pressable
        android_ripple={{ color: "#eee", radius: 60 }}
        style={styles.btn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.btnText}>English</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "beige",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo:{
    width:200,
    height:150,
    borderRadius:100,
  },
  box: {
    marginTop: 60,
    marginBottom: 30,
    paddingVertical: 20,
    width: "80%",
    borderRadius: 20,
    backgroundColor: "antiquewhite",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    opacity: 0.7,
  },
  btn: {
    marginTop: 10,
    marginBottom: 20,
    paddingVertical: 10,
    width: "70%",
    borderRadius: 20,
    backgroundColor: "black",
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },

  btnText: {
    color: "antiquewhite",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    paddingHorizontal: 5,
  },
});
