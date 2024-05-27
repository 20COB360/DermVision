import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ServiceCard({ date, imageUri, prediction }) {
  return (
    <View style={styles.ServiceCard}>
      <Text style={styles.ServiceCardText}>Date: {new Date(date).toLocaleDateString()}</Text>
      <View style={styles.ServiceCardInfo}>
        <Image
          source={{ uri: imageUri }}
          style={styles.cardimg}
        />
        <View>
          <Text style={styles.heading}>Prediction</Text>
          <Text style={styles.prediction}>{prediction}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ServiceCard: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 20,
    padding: 10,
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
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingBottom: 10,
  },
  cardimg: {
    width: 100,
    height: 100,
    borderColor: "green",
    borderWidth: 2,
  },
  heading: {
    fontWeight: "bold",
    fontSize:25,
    color:'darkgreen',
  },
  prediction: {
    fontWeight: "bold",
    fontSize:18,
    color:'red',
  },
});
