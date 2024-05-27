import { Image, Pressable, StyleSheet, Text, View, ScrollView, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import { fetchUserData } from '../userData';
import * as ImagePicker from "expo-image-picker";
import { firebase_auth, firebase_db, firebase_storage } from "../firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { updateProfile } from "firebase/auth";
import { update } from "firebase/database";
import { useFocusEffect } from "@react-navigation/native";

export default function Profile({ navigation }) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      const refreshUserData = async () => {
        try {
          const data = await fetchUserData();
          setUserData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      refreshUserData();

      return () => {
        // Cleanup function
      };
    }, [])
  );

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });

      console.log('ImagePicker result:', result); // Log the result to check its structure

      if (!result.canceled && result.assets && result.assets.length > 0) {
        await uploadImage(result.assets[0].uri);
      } else {
        console.error('ImagePicker result is not valid:', result);
      }
    } catch (error) {
      console.error('Error picking image:', error);
    }
  };

  const uploadImage = async (uri) => {
    try {
      setUploading(true);
      const userId = firebase_auth.currentUser.uid;
      const response = await fetch(uri);
      const blob = await response.blob();
      const storageRef = ref(firebase_storage, `profile_pictures/${userId}`);
      const snapshot = await uploadBytes(storageRef, blob);

      const downloadURL = await getDownloadURL(snapshot.ref);
      await updateProfile(firebase_auth.currentUser, {
        photoURL: downloadURL,
      });

      const userRef = ref(firebase_db, `users/${userId}`);
      await update(userRef, { photoURL: downloadURL });

      setUserData({ ...userData, photoURL: downloadURL });
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebase_auth.signOut();
      navigation.navigate("Login"); // Navigate to the login screen
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (loading) {
    return <Text>Loading user data...</Text>;
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.bellandback}>
        <Pressable>
          <Image
            source={require("../assets/static/20240228_031624_0025.png")}
            style={styles.btnimg}
          />
        </Pressable>
        <Pressable>
          <Image
            source={require("../assets/static/20240228_031624_0024.png")}
            style={styles.btnimg}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View style={styles.profbox}>
          <Text style={styles.headings}>Profile</Text>
          <Pressable onPress={pickImage}>
            {uploading ? (
              <ActivityIndicator size="large" color="#0000ff" />
            ) : (
              <Image
                source={userData.photoURL ? { uri: userData.photoURL } : require("../assets/static/20240221_000353_0007.png")}
                style={styles.profpic}
              />
            )}
          </Pressable>
          <Text>{userData.name}</Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.headings}>Personal Information</Text>
          <View style={styles.infobox}>
            <Text style={styles.infohead}>Name </Text>
            <Text style={styles.info}>{userData.name}</Text>
            <Text style={styles.infohead}>E-Mail</Text>
            <Text style={styles.info}>{userData.email}</Text>
            <Text style={styles.infohead}>Phone</Text>
            <Text style={styles.info}>{userData.mobile}</Text>
          </View>
          <Pressable style={styles.rightbox} onPress={() => navigation.navigate("EditProfile")}>
            <Text style={styles.editprofbtn}>Edit Profile</Text>
            <Image
              source={require("../assets/static/20240228_031624_0026.png")}
              style={styles.followpic}
            />
          </Pressable>
          <Text style={styles.headings}>Security</Text>
          <View style={styles.security}>
            <Pressable style={styles.linkbox} onPress={() => navigation.navigate("ChangePassword")}>
              <Text>Change Password</Text>
              <Image
                source={require("../assets/static/20240228_031624_0026.png")}
                style={styles.followpic}
              />
            </Pressable>
          </View>
          <Pressable style={styles.linkbox} onPress={() => console.log('Navigate to About Us')}>
            <Text style={styles.headings}>About Us</Text>
            <Image
              source={require("../assets/static/20240228_031624_0028.png")}
              style={styles.followpic}
            />
          </Pressable>
          <Pressable style={styles.rightbox} onPress={handleSignOut}>
            <Text style={styles.signoutbtn}>Sign Out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#00e9f1",
    width: "100%",
    height: "100%",
  },
  headings: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#221410",
  },
  bellandback: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btnimg: {
    height: 60,
    width: 60,
  },
  profbox: {
    display: "flex",
    alignItems: "center",
  },
  profpic: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  followpic: {
    height: 30,
    width: 30,
  },
  followpiccontact: {
    height: 60,
    width: 50,
  },
  linkbox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    marginLeft: 0,
  },
  rightbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box: {
    backgroundColor: "beige",
    padding: 20,
    marginTop: 15,
    borderRadius: 50,
  },
  security: {
    paddingLeft: 20,
  },
  signoutbtn: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    padding: 10,
    backgroundColor: "black",
    width: 90,
    borderRadius: 38,
  },
  contactbtn: {
    color: "white",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    marginLeft: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "black",
    width: 120,
    borderRadius: 38,
  },
  editprofbtn: {
    fontWeight: "bold",
    color: "#221410",
  },
  infobox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: 20,
    gap: 10,
  },
  info: {
    width: "45%",
  },
  infohead: {
    width: "45%",
  },
});
