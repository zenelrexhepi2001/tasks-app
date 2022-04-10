import React, { useDebugValue, useEffect }  from "react";
import { NavigationContainer,DarkTheme,DefaultTheme } from "@react-navigation/native";
import {Appearance} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import NavigationScreensConfig from "./navigations";
import {useFonts} from 'expo-font';
import { CHANGE_THEME } from "./actions/type";

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
