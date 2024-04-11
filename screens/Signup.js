import {
    StyleSheet,
    Image,
    Text,
    TextInput,
    Pressable,
    View,
  } from "react-native";
  import React from "react";
  import { useState } from "react";
  import { firebase_auth } from "../firebaseConfig";
  import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("");
    const auth = firebase_auth;
  
    // const signIn = async () => {
    //   setLoading(true);
    //   try {
    //     const response = await signInWithEmailAndPassword(auth, email, password);
    //     console.log(response);
    //     navigation.navigate("Tabs");
    //   } catch (error) {
    //     console.log(error);
    //     alert('SignIn failed '+ error.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
  
    const signUp = async () => {
      setLoading(true);
      try {
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
  
    const onPressFunction = () => console.log("pressed");
    return (
      <View style={styles.container}>
        <View style={styles.topright}>
          <View style={styles.toprightwrapper}>
            <Text style={styles.toprightmsg}>Diagnosis at</Text>
            <Text style={styles.toprightmsg}>your Fingertips</Text>
          </View>
          <Image source={require("../static/l1.png")} style={styles.img} />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.greeting}>
            <Text style={styles.greetingmsg}>Hi !</Text>
            <Text style={styles.greetingmsg}>Welcome to</Text>
            <Text style={styles.greetingmsg}>DermVision</Text>
          </View>
  
          <View style={styles.loginForm}>
            <Text style={styles.detailinfo}>Please enter details</Text>
            <View style={styles.inputbox}>
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.miscbox}>
              {/* <Text style={styles.miscboxmsg}>Remember Me</Text> */}
              {/* <Text style={styles.miscboxmsg}>Forgot Password?</Text> */}
            </View>
  
            <View style={styles.loginbtn}>
              <Pressable onPress={onPressFunction}>
                <Text style={styles.loginbtnmsg}>Sign Up</Text>
              </Pressable>
            </View>
          </View>
        </View>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center", // Add alignItems for centering child elements horizontally
      backgroundColor: "beige",
    },
    topright: {
      position: "absolute",
      top: 50,
      right: -10,
      display: "flex",
      flexDirection: "row",
      fontWeight: "bold",
      gap: 5,
    },
    toprightmsg: {
      fontWeight: "bold",
    },
    img: {
      height: "90%",
      width: "20%",
    },
    wrapper: {
      width: "80%",
    },
    greeting: {
      marginBottom: 20,
    },
    greetingmsg: {
      fontSize: 60,
      color: "#333341",
      margin: -8,
    },
  
    loginForm: {},
    detailinfo: {
      fontSize: 20,
      color: "#333341",
      fontWeight: "bold",
      marginBottom: 20,
    },
    input: {
      borderBottomWidth: 3,
      borderBottomColor: "#333341",
      marginBottom: 20,
      fontSize: 15,
      color: "#333341",
    },
    miscbox: {
      marginTop: 10,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 20,
    },
    miscboxmsg: {
      fontSize: 15,
      fontWeight: "bold",
    },
    loginbtn: {
      width: "100%",
      backgroundColor: "#333341",
      verticalAlign: "center",
      marginBottom: 20,
    },
    loginbtnmsg: {
      width: "100%",
      color: "antiquewhite",
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
      margin: 10,
    },
    signupbtn: {
      position: "absolute",
      bottom: 40,
      textAlign: "center",
    },
  });
  