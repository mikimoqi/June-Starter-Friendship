import React from "react";
import InterestScreen from "./InterestScreen";
import TopBar from "../components/header";
import { createStackNavigator } from "@react-navigation/stack";
import AddContact from "../components/AddContact";
export default function InterestNavigationScreen() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Interests"
        component={InterestScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Profile"
        component={AddContact}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
