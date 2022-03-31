import {Text} from 'react-native';
import { TouchableOpacity } from "react-native";
//rn navigation 
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationEventMap,
} from "@react-navigation/material-bottom-tabs";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Colors typography
import { Colors,Typography } from "../styles";


//Logo
import HomeLogo from "../assets/svg/home.svg";
import Calendar from "../assets/svg/calendar.svg";
import Habits from "../assets/svg/habits.svg";
import Settings from "../assets/svg/settings.svg";
import Menu from "../assets/svg/menu.svg";

//Components and screens
import HomeScreen from "../screens/home/HomeScreen";
import CreateListScreen from '../screens/create-list/CreateListScreen';
import CreateTaskScreen from '../screens/create-task/CreateTaskScreen';
import { AddCircle } from '../components/atoms';

//Creating Stacks and tabs navigation
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigationScreen = (props) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        elevation: 0,
        backgroundColor: '#fff',
        height: 40,
        shadowColor: '#fff',
        borderTopWidth: 0,
        borderTopColor: '#fff',

      },
    }}
    >
      <Tab.Screen
        name="Home"
        component={TasksNavigationScreens}
        options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: () => (
                <HomeLogo  width={25} height={25}/>
            )
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={''}
        options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: () => (
                <Calendar  width={25} height={25}/>
            )
        }}
      />
      <Tab.Screen
        name="Habits"
        component={''}
        options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: () => (
                <Habits  width={25} height={25}/>
            )
        }}
      />
        <Tab.Screen
        name="Settins"
        component={CreateTaskScreen}
        options={{
            tabBarLabel: '',
            headerShown: false,
            tabBarIcon: () => (
                <Settings  width={25} height={25}/>
            )
        }}
      />
      <Tab.Screen
         name='create-task'
         component={CreateTaskScreen}
         options={{
             tabBarLabel: '',
             tabBarIcon: () => (
               <AddCircle/>
             )
         }}
      />
    </Tab.Navigator>
  );
};

const TasksNavigationScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tasks"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerShadowVisible: false,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: Colors.LIGHT,
          },
          headerTitleStyle: {
            fontSize: 26,
            fontFamily: Typography.FONT_FAMILY_POPPIS,
            color: Colors.PRIMARY,
            fontWeight: "700",
          },

          headerLeft: () => (
            <TouchableOpacity
              style={{
                paddingLeft: 20,
              }}
            >
              <Menu width={30} height={30} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name='create'
        component={CreateListScreen}
      />
      <Stack.Screen
        name='create-task'
        component={CreateTaskScreen}
      />
    </Stack.Navigator>
  );
};

export default TabNavigationScreen;
