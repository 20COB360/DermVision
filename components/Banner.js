import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Banner() {
  return (
    <View style={styles.banner}>
      <View>
        <Text style={styles.bannertext}>
          <Text style={styles.boldtext}>We</Text> make your
        </Text>
        <Text style={styles.bannertext}>
          home's <Text style={styles.boldtext}>technical</Text>
        </Text>
        <Text style={styles.bannertext}>
          issues <Text style={styles.boldtext}>hassle free</Text>
        </Text>
      </View>
      <View>
        <Image
          source={require("../assets/static/20240221_000353_0010.png")}
          style={styles.img1}
        />
      </View>
      <View>
        <Image
          source={require("../assets/static/20240221_000353_0009.png")}
          style={styles.img2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#343341",
    width: "90%",
    display: "flex",
    flexDirection: "row",
    alignSelf: "center",
    verticalAlign: "middle",
    alignItems: "center",
    margin: 30,
    paddingLeft: 20,
    borderRadius: 30,
    gap: 10,
    justifyContent: "space-between",
  },
  bannertext: {
    color: "white",
    fontSize: 20,
  },
  boldtext: {
    fontWeight: "bold",
  },
  img1: {
    width: 50,
    height: 70,
    position: "relative",
  },
  img2: {
    width: 120,
    height: 120,
    position: "relative",
    bottom: -12,
    right: -10,
  },
});
