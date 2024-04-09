import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import Search from "../components/Search";
import ServiceCard from "../components/ServiceCard";

function Services() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.topbox}>
        <Text style={styles.head_text}>YOUR</Text>
        <Text style={styles.head_text}>PREDICTION HISTORY</Text>
      </View>
      <View  style={styles.cardholder}>
        <ServiceCard />
        <ServiceCard />
      </View>
    </View>
  );
}

export default Services;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "beige",
    height: "100%",
  },
  topbox: {
    backgroundColor: "#00e9f1",
    paddingTop: 50,
    paddingBottom: 10,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  head_text: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
  cardholder: {
    marginTop: 20,
    // width:'80%',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
});
