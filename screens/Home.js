import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState } from 'react';
import Header from "../components/Header";
function Home() {
  const [image, setImage] = useState(null);

  const uploadImage = async () => {
    try {
      // Let the user pick an image from their device
      const result = await ImagePicker.launchImageLibraryAsync();

      // If the user didn't pick an image, return
      if (!result.cancelled) {
        // Upload the image to your server
        // ...

        // Set the image state to the picked image
        setImage(result.uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      // Handle the error gracefully, e.g., show a message to the user
    }
  };

  return (
    <View style={styles.wrapper}>
      <Header />
      <View style={styles.reviewbox}>
        <View style={styles.reviewboxhead}>
          <Image
            source={require("../assets/static/20240221_000353_0016.png")}
            style={styles.tripledot}
          />
        </View>
        
      </View>
      <Button title="Upload Image"></Button>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "beige",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  reviewbox: {
    padding: 20,
  },
  reviewboxtext: {
    fontWeight: "bold",
    fontSize: 20,
  },
  reviewboxhead: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  tripledot: {
    height: 50,
    width: 50,
  },
  cardholder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    verticalAlign: "middle",
  },
  btnText: {
    color: "beige",
    textAlign:'center',
    fontSize: 25,
    marginLeft:20,
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    backgroundColor:'black',
    width:'50%',
    borderRadius:38,
  },
});
