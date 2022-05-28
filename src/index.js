import React from "react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import NavigationScreensConfig from "./navigations";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";

const App = () => {
  const GET_LOADING_NULL = null;
  
  const [loaded] = useFonts({
    Poppins: require("./assets/fonts/Poppins.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={GET_LOADING_NULL} persistor={persistor}>
        <NavigationContainer>
          <NavigationScreensConfig />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
