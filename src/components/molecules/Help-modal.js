import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Colors, Typography } from "../../styles";
import { Ionicons } from "@expo/vector-icons";

const HelpModal = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.visibleModal}
      >
        <View style={styles.hero}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <TouchableOpacity
                onPress={() => props.setModal(!props.visibleModal)}
              >
                <Ionicons
                  name={Platform.OS === "android" ? "close" : "ios-close"}
                  size={30}
                  color={Colors.SUCCESS}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <Text style={styles.modalDescription}>Lorem ipsum!</Text>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
  },

  hero: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modal: {
    backgroundColor: Colors.LIGHT,
    width: 350,
    paddingTop: 25,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },

  modalHeader: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },

  modalContent: {
    width: "100%",
  },

  btnLight: {
    marginBottom: 16,
  },

  modalDescription: {
    color: Colors.PRIMARY,
    fontSize: 15,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    fontWeight: "600",
  },
});

export default HelpModal;
