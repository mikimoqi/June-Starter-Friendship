import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import { BottomTabs } from "./src/components/footer";
import { useFonts } from "expo-font";

function App() {
  const [loaded] = useFonts({
    CircularStd: require("./assets/CircularStd.otf"),
    CircularStdMedium: require("./assets/CircularStd-Medium.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabs />
    </NavigationContainer>
  );
}

export default App;
