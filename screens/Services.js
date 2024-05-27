// Services.js
import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ServiceCard from "../components/ServiceCard";
import { firebase_db, firebase_auth } from "../firebaseConfig";
import { ref, get, child } from "firebase/database";
import { useFocusEffect } from '@react-navigation/native';

function Services() {
  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const fetchPredictions = async () => {
        setLoading(true);
        try {
          const userId = firebase_auth.currentUser.uid;
          const predictionsRef = ref(firebase_db, `users/${userId}/predictions`);
          const snapshot = await get(child(predictionsRef, "/"));
          if (snapshot.exists()) {
            const data = snapshot.val();
            const predictionsList = Object.keys(data).map(key => ({
              id: key,
              ...data[key]
            }));
            setPredictions(predictionsList);
          } else {
            console.log("No prediction history found");
          }
        } catch (error) {
          console.error("Error fetching prediction history:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPredictions();
    }, [])
  );

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.topbox}>
        <Text style={styles.head_text}>YOUR</Text>
        <Text style={styles.head_text}>PREDICTION HISTORY</Text>
      </View>
      <ScrollView style={styles.cardholder}>
        {predictions.length > 0 ? (
          predictions.map(prediction => (
            <ServiceCard
              key={prediction.id}
              date={prediction.date}
              imageUri={prediction.imageUri}
              prediction={prediction.prediction}
            />
          ))
        ) : (
          <Text style={styles.noprediction}>No prediction history</Text>
        )}
      </ScrollView>
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
    paddingHorizontal: 20,
  },
  noprediction:{
    marginTop:50,
    fontSize:30,
    fontWeight:'bold',
    textAlign:'center',
  },
});
