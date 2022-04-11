import React  from "react";
import { NavigationContainer} from "@react-navigation/native";
import { Provider } from 'react-redux';
import { store } from './store';
import NavigationScreensConfig from "./navigations";
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
