import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Question1 from "../screens/Questions/Question1";
import Question2 from "../screens/Questions/Question2";
import Question3 from "../screens/Questions/Question3";
import Question4 from "../screens/Questions/Question4";
import Home from "../screens/Home";
import Question5 from "../screens/Questions/Question5";
import States from "../screens/States";
import City from "../screens/City";
import CityDetail from "../screens/CityDetail";
import StateDetails from "../screens/StateDetails";
import Catagories from "../screens/Catagories";
export default function AppNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Welcome" component={Welcome}></Stack.Screen>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Question1" component={Question1}></Stack.Screen>
        <Stack.Screen name="Question2" component={Question2}></Stack.Screen>
        <Stack.Screen name="Question3" component={Question3}></Stack.Screen>
        <Stack.Screen name="Question4" component={Question4}></Stack.Screen>
        <Stack.Screen name="Question5" component={Question5}></Stack.Screen>
        <Stack.Screen name="States" component={States}></Stack.Screen>
        <Stack.Screen name="Top Cities" component={City}></Stack.Screen>
        <Stack.Screen name="CityDetail" component={CityDetail}></Stack.Screen>
        <Stack.Screen name="StateDetails" component={StateDetails}></Stack.Screen>
        <Stack.Screen name="Catagories" component={Catagories}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
