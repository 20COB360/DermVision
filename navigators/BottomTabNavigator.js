import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/Home";
import Services from "../screens/Services";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#00e9f1",
          // borderTopStartRadius: 20,
          // borderTopEndRadius: 20,
          shadowOpacity: 0,
          borderTopWidth: 0,
        },
        tabBarItemStyle: {
          margin: 5,
          // borderRadius: 10,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Home",

          tabBarIcon: () => (
            <Image
              source={require("../assets/static/home.png")}
              style={{ height: 20, aspectRatio: 1 }}
            />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "History",
          tabBarIcon: () => (
            <Image
              source={require("../assets/static/history.png")}
              style={{ height: 20, aspectRatio: 1 }}
            />
          ),
        }}
        name="History"
        component={Services}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: () => (
            <Image
              source={require("../assets/static/profile.png")}
              style={{ height: 20, aspectRatio: 1 }}
            />
          ),
        }}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}
