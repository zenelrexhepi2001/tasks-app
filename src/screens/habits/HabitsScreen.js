import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Typography } from "../../styles";

import HabitsMenu from "../../assets/svg/habits-menu.svg";

const HabitsScreen = (props) => {
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
              <Text style={styles.alertPercentage}>40%</Text>
            </View>
            <View style={styles.line}>
              <View style={styles.lineColor} />
            </View>
          </View>
        </View>
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
});

export default HabitsScreen;
