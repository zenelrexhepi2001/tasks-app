import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Colors, Typography } from "../../styles";
import HabitsMenu from "../../assets/svg/habits-menu.svg";
import { LineChart } from "react-native-chart-kit";

import { useSelector } from "react-redux";

import DownArrow from "../../assets/svg/downColor.svg";
import AsyncStorage from '@react-native-async-storage/async-storage';

const HabitsScreen = (props) => {
  //Hooks
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const displayDataChart = useSelector((state) => state.Habits.DataHabits);
  const counter = useSelector((state) => state.TaskNumber);
  console.log(counter);

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('@Todo_App',JSON.stringify(counter));
    }catch (err) {
      console.log(err);
    }
    await AsyncStorage.setItem('@Todo_App',JSON.stringify(counter));
  }

  
  const storeData = async () => {
     try {
      let jsonValue = await AsyncStorage.getItem('@Todo_App');
      jsonValue != null ? JSON.parse(jsonValue) : null
     }catch (err) {
       console.log(err);
     }
  }

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem('@Todo_App');
    }catch (err) {
      console.log(err);
    }finally {
      console.log('Finally...')
    }
  }

  useEffect(() => {
      saveData();
      storeData();
      removeData();
  },[]);

  useEffect(async () => {
    setLoading(true);
    setError(null);
    try {
      setTimeout(() => {
         setLoading(false);
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  }, [setLoading,setError]);

  if (loading) {
    return (
      <View
        style={{
          backgroundColor: Colors.LIGHT,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" color={Colors.PRIMARY} />
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.alert}>
          <View style={styles.flex}>
            <TouchableOpacity style={styles.menu}>
              <HabitsMenu width={40} height={40} />
            </TouchableOpacity>
            <View style={styles.alertContent}>
              <Text style={styles.alertTitle}>Finished today</Text>
              <Text style={styles.alertPercentage}>{counter}</Text>
            </View>
            <View style={styles.line}>
              <View style={styles.lineColor} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.top}>
        <View style={styles.btnGroup}>
          <TouchableOpacity style={styles.btnLight}>
            <Text style={styles.btnText}>all habits</Text>
            <DownArrow width={10} height={10} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnLight}>
            <Text style={styles.btnText}>Weekly</Text>
            <DownArrow width={10} height={10} />
          </TouchableOpacity>
        </View>
        <LineChart
          data={displayDataChart}
          width={Dimensions.get("window").width}
          height={302.15}
          verticalLabelRotation={0}
          horizontalLabelRotation={0}
          yAxisSuffix={"%"}
          withShadow={true}
          chartConfig={{
            backgroundColor: Colors.LIGHT,
            backgroundGradientFrom: Colors.LIGHT,
            backgroundGradientTo: Colors.LIGHT,
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255,255,255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0,0,0, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: 0,
              strokeWidth: "0",
              strokeOpacity: 0,
              stroke: Colors.SUCCESS,
            },
          }}
          bezier
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.LIGHT,
  },

  container: {
    paddingTop: 38,
  },

  alert: {
    backgroundColor: Colors.LIGHT,
    padding: 30,
  },

  flex: {
    flexDirection: "row",
    alignContent: "center",
    flexWrap: "wrap",
  },

  menu: {
    marginRight: 21,
  },

  alertContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    marginTop: -5,
    flexWrap: "wrap",
  },

  alertTitle: {
    color: Colors.PRIMARY,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: Typography.FONT_FAMILY_POPPIS,
  },

  alertPercentage: {
    fontSize: 16,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    fontWeight: "600",
    color: Colors.PRIMARY,
  },

  line: {
    backgroundColor: "rgba(63, 61, 86, 0.1)",
    width: "82.1%",
    position: "absolute",
    bottom: 0,
    right: 0,
    height: 6,
    borderRadius: 30,
  },

  lineColor: {
    height: 6,
    backgroundColor: Colors.GREEN_SUCCESS,
    position: "absolute",
    borderRadius: 30,
    width: "50%",
  },

  top: {
    paddingTop: 14.5,
  },

  btnGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
  },

  btnLight: {
    flexDirection: "row",
    alignItems: "center",
  },

  btnText: {
    fontSize: 17,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    color: Colors.PRIMARY,
    marginRight: 9.3,
  },
});

export default HabitsScreen;
