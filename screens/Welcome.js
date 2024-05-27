import * as React from "react";
import {
  Pressable,
  StyleSheet,
  Image,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function Welcome({ navigation }) {
  const { height, width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <Image source={require("../static/w2.png")} style={styles.gola} />
      <Image source={require("../static/w1.png")} style={styles.bulb} />
      <View style={[styles.bottom, { width: width * 0.9 }]}>
        <Text style={styles.heroText}>Diagnose your skin </Text>
        <Text style={styles.heroText}>in seconds.</Text>
        <View style={styles.separator} />

        <Pressable
          android_ripple={{ color: "#eee", radius: 60 }}
          style={styles.btn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>GET STARTED</Text>
          <Image
            source={require("../assets/static/btn_arrow.png")}
            style={{ height: 38, width: 38, alignSelf: "center" }}
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    backgroundColor: "beige",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  gola: {
    top: 180,
    height: 150,
    width: "40%",
    alignSelf: "flex-end",
  },
  bulb: {
    left: 5,
    bottom: 5,
    height: 350,
    width: 250,
    marginBottom: 0,
    alignSelf: "flex-start",
    shadowColor: "black",
    shadowOpacity: 1,
  },
  bottom: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100",
  },
  heroText: {
    fontSize: 38,
    marginHorizontal: 10,
    alignSelf: "flex-start",
  },
  separator: {
    marginVertical: 10,
    height: 3,
    width: "100%",
    backgroundColor: "black",
    borderRadius: 10,
    opacity: 1,
    alignSelf: "center",
  },
  btn: {
    marginTop: 10,
    marginBottom: 45,
    padding: 5,
    gap: 3,
    borderRadius: 50,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    verticalAlign: "middle",
  },
  btnText: {
    color: "black",
    fontSize: 30,
  },
});
