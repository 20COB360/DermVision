import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import React from "react";

export default function ServiceCard(props) {
  return (
    <View style={styles.ServiceCard}>
      <Text style={styles.ServiceCardText}>Date: 15/08/2002</Text>
      <View style={styles.ServiceCardInfo}>
        <Image
          source={require("../assets/static/_0_1225631.jpg")}
          style={styles.cardimg}
        />
        <>
          <Text style={styles.heading}>Prediction</Text>
          <Text>Something</Text>
        </>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceCard: {
    width: "90%",
    backgroundColor: "antiquewhite",
    borderRadius: 20,
    overflow: "hidden",
    margin: 10,
  },
  ServiceCardText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    borderBottomColor: "green",
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  ServiceCardInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 10,
  },
  cardimg: {
    width: "30%",
    height: 100,
    borderColor: "green",
    borderWidth: 2,
  },
  heading: {
    fontWeight: "bold",
  },
});
