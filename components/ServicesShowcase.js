import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import React from "react";

export default function ServicesShowcase() {
  return (
    <ScrollView horizontal={true} > 

    <View style={styles.servicesShowcase}>
      <View style={styles.servicebox}>
        <View style={styles.serviceimg}>
          <Image
            source={require("../assets/static/20240221_000353_0011.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.service}>AC Repairment</Text>
      </View>
      <View style={styles.servicebox}>
        <View style={styles.serviceimg}>
          <Image
            source={require("../assets/static/20240221_000353_0012.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.service}>Carpentry</Text>
      </View>
      <View style={styles.servicebox}>
        <View style={styles.serviceimg}>
          <Image
            source={require("../assets/static/20240221_000353_0013.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.service}>Plumbing</Text>
      </View>
      <View style={styles.servicebox}>
        <View style={styles.serviceimg}>
          <Image
            source={require("../assets/static/20240221_000353_0014.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.service}>Painting</Text>
      </View>
      <View style={styles.servicebox}>
        <View style={styles.serviceimg}>
          <Image
            source={require("../assets/static/20240221_000353_0014.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.service}>Painting</Text>
      </View>
      <View style={styles.servicebox}>
        <View style={styles.serviceimg}>
          <Image
            source={require("../assets/static/20240221_000353_0014.png")}
            style={styles.img}
          />
        </View>
        <Text style={styles.service}>Painting</Text>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  servicesShowcase: {
    width: "100%",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 15,
    gap: 25,
    paddingLeft: 20,
  },
  servicebox: {
    alignItems: "center",
    gap: 5,
  },
  serviceimg: {
    backgroundColor: "#00e9f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 75,
    height: 75,
  },
  service: {
    fontSize: 11,
    fontWeight: "bold",
  },
  img: {
    width: 50,
    height: 50,
    aspectRatio: 1,
  },
});
