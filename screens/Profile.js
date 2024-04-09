import { Image, Pressable, StyleSheet, Text, View,ScrollView } from "react-native";
import React from "react";

export default function Profile() {
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
        <Image
          source={require("../assets/static/20240221_000353_0007.png")}
          style={styles.profpic}
        />
        <Text>User's Name</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.headings}>Personal Information</Text>
        <View style={styles.infobox}>
          <Text style={styles.infohead}>Name </Text>
          <Text style={styles.info}>Mariya</Text>
          <Text style={styles.infohead}>Username</Text>
          <Text style={styles.info}>mariya_786</Text>
          <Text style={styles.infohead}>Gender</Text>
          <Text style={styles.info}>Female</Text>
          <Text style={styles.infohead}>E-Mail</Text>
          <Text style={styles.info}>hello@world.com</Text>
          <Text style={styles.infohead}>Phone</Text>
          <Text style={styles.info}>97884654</Text>
        </View>
        <Pressable style={styles.rightbox}>
          <Text style={styles.editprofbtn}>Edit Profile</Text>
          <Image
            source={require("../assets/static/20240228_031624_0026.png")}
            style={styles.followpic}
          />
        </Pressable>
        <Text style={styles.headings}>Security</Text>
        <View style={styles.security}>
          <Pressable style={styles.linkbox}>
            <Text>Change Password</Text>
            <Image
              source={require("../assets/static/20240228_031624_0026.png")}
              style={styles.followpic}
            />
          </Pressable>
          <Pressable style={styles.linkbox}>
            <Text>Change mobile number</Text>
            <Image
              source={require("../assets/static/20240228_031624_0026.png")}
              style={styles.followpic}
            />
          </Pressable>
        </View>
        <Pressable style={styles.linkbox}>
          <Text style={styles.headings}>About Us</Text>
          <Image
            source={require("../assets/static/20240228_031624_0028.png")}
            style={styles.followpic}
          />
        </Pressable>
        <Pressable style={styles.linkbox}>
          <Text style={styles.headings}>FAQs</Text>
          <Image
            source={require("../assets/static/20240228_031624_0027.png")}
            style={styles.followpic}
          />
        </Pressable>
        <Pressable style={styles.linkbox}>
          <Text style={styles.signoutbtn}>Sign Out</Text>
        </Pressable>
        <Pressable style={styles.rightbox}>
          <Text style={styles.contactbtn}>Contact Us</Text>
          <Image
            source={require("../assets/static/20240228_031624_0029.png")}
            style={styles.followpiccontact}
          />
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
    borderBottomEndRadius:0,
    borderBottomLeftRadius:0,
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
    // margin:10,
  },
  infohead: {
    width: "45%",
  },
});
