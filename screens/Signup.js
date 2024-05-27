import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { firebase_auth, firebase_db } from "../firebaseConfig";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ref, set } from "firebase/database";

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );
      const userId = response.user.uid;
      await set(ref(firebase_db, 'users/' + userId), {
        name,
        email,
        mobile,
      });
      console.log('User registered successfully:', response);
      navigation.navigate("Tabs");
    } catch (error) {
      console.log('Error registering user:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topright}>
        <Image
          source={require("../static/l1.png")}
          style={styles.img}
        />
      </View>
      <View style={styles.wrapper}>
        <View style={styles.greeting}>
          <Text style={styles.greetingmsg}>Register to</Text>
          <Text style={styles.greetingmsg}>DermVision</Text>
        </View>

        <View style={styles.loginForm}>
          <Text style={styles.detailinfo}>Please enter details</Text>
          <View style={styles.inputbox}>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={(text) => setName(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={styles.input}
            />
            <TextInput
              placeholder="Mobile"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
              style={styles.input}
            />
          </View>

          <View style={styles.loginbtn}>
            <Pressable onPress={signUp}>
              <Text style={styles.loginbtnmsg}>Sign Up</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "beige",
  },
  topright: {
    position: "absolute",
    top: 50,
    right: 0,
    display: "flex",
    flexDirection: "row",
    fontWeight: "bold",
    gap: 5,
  },
  img: {
    height: 50,
    width: 50,
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
    borderWidth: 3,
    borderColor: "green",
    marginBottom: 20,
    padding: 5,
    fontSize: 15,
    color: "#333341",
    borderRadius: 10,
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
});
