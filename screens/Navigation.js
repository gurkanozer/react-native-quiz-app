import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalContext } from "../context/globalState";
//SCREENS
import QuizScreen from "./QuizScreen";
import StartScreen from "./StartScreen";
import ResultScreen from "./ResultScreen";

const Stack = createStackNavigator();

const Navigation = () => {
  const { quiz } = useContext(GlobalContext);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {quiz.length === 0 ? (
          <>
            <Stack.Screen name="Start" component={StartScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Result" component={ResultScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
