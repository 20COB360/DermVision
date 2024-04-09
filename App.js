import { StatusBar } from "expo-status-bar";
import PrimaryNavigator from "./navigators/PrimaryNavigator";
import Home from "./screens/Home";

export default function App() {
  return (
    <>
      <PrimaryNavigator />
      {/* <Home/> */}
      <StatusBar style="auto" />
    </>
  );
}
