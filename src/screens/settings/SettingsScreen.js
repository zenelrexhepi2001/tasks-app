import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Colors, Typography } from "../../styles";
import { Ionicons } from "@expo/vector-icons";
import * as ThemeActions from "../../actions/DarkModeActions";
import { useDispatch, useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const SettingsScreen = (props) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((prevState) => !prevState);
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="right" size={20} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <View style={styles.flexChildren}>
            <TouchableOpacity style={styles.circle}>
              <Fontisto name="world" size={20} color={Colors.SUCCESS} />
            </TouchableOpacity>
            <Text style={styles.settingsTitle}>Language</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="right" size={20} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <View style={styles.flexChildren}>
            <TouchableOpacity style={styles.circle}>
              <Ionicons
                name={
                  Platform.OS === "android"
                    ? "notifications"
                    : "ios-notifications"
                }
                size={20}
                color={Colors.SUCCESS}
              />
            </TouchableOpacity>
            <Text style={styles.settingsTitle}>Notifications</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <Switch
            trackColor={{ false: Colors.PRIMARY, true: Colors.SUCCESS }}
            thumbColor={isEnabled ? Colors.PRIMARY : Colors.SECONDARY}
            ios_backgroundColor={Colors.SECONDARY}
            // onValueChange={(val) => dispatch(ThemeActions.ToggleTheme(val))}
            // value={themeReducer.theme}
          />
          <View style={styles.flexChildren}>
            <TouchableOpacity style={styles.circle}>
              <Ionicons
                name={Platform.OS === "android" ? "moon-sharp" : "ios-moon"}
                size={20}
                color={Colors.SUCCESS}
              />
            </TouchableOpacity>
            <Text style={styles.settingsTitle}>Dark Mode</Text>
          </View>
        </View>
        <View style={styles.flex}>
          <TouchableOpacity style={styles.box}>
            <AntDesign name="right" size={20} color={Colors.PRIMARY} />
          </TouchableOpacity>
          <View style={styles.flexChildren}>
            <TouchableOpacity style={styles.circle}>
              <Ionicons
                name={
                  Platform.OS === "android" ? "md-help-buoy" : "md-help-buoy"
                }
                size={20}
                color={Colors.SUCCESS}
              />
            </TouchableOpacity>
            <Text style={styles.settingsTitle}>Help</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colors.LIGHT,
    flex: 1,
  },

  container: {
    margin: 23,
  },

  flex: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 48,
  },

  flexChildren: {
    flexDirection: "row",
    alignItems: "center",
  },

  circle: {
    backgroundColor: Colors.SECONDARY,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginRight: 20,
  },

  settingsTitle: {
    color: Colors.PRIMARY,
    fontSize: 20,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    fontWeight: "700",
  },

  box: {
    backgroundColor: Colors.SECONDARY,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
  },
});

export default SettingsScreen;
