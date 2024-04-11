import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "../screens/Login";
import SignUp from "../screens/Signup";
import Welcome from "../screens/Welcome";
import SelectLanguage from "../screens/SelectLanguage";
import BottomTabNavigator from "../navigators/BottomTabNavigator"


const Stack = createNativeStackNavigator();

export default function PrimaryNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SelectLanguage" component={SelectLanguage} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
