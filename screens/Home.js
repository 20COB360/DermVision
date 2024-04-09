import * as React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";
import { useState } from 'react';
import Header from "../components/Header";
function Home() {

  return (
    <View style={styles.wrapper}>
      <Header />
     
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
