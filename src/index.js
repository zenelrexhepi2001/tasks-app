import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { View, Text, StyleSheet } from "react-native";
import TasksNavigationScreens from "./navigation/TasksNavigationScreens";
import NavigationScreensConfig from "./navigation";
import { NavigationContainer } from "@react-navigation/native";
import {useFonts} from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    Poppins: require('./assets/fonts/Poppins.ttf'),
  });
  
  if(!loaded) {
       return null;
     }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationScreensConfig />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
