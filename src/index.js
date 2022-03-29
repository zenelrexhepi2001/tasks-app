import { NavigationContainer } from '@react-navigation/native';
import React from 'react'; 
import {View,Text,StyleSheet} from 'react-native';
import TasksNavigationScreens from './navigation/TasksNavigationScreens';

const App = () => {
    return (
        <NavigationContainer>
        <TasksNavigationScreens/>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({

})

export default App;