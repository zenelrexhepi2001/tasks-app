import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors, Typography } from "../../styles";

const ModalLanguage = (props) => {
  const DATA_LANGUAGES = [
    {
      id: 1,
      title: "English",
    },
    {
      id: 2,
      title: "Shqip",
    },
  ];

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
              <FlatList
                data={DATA_LANGUAGES}
                keyExtractor={(item) => item.id}
                renderItem={(data) => (
                  <TouchableOpacity style={styles.btnLight}>
                    <Text style={styles.modalTitle}>
                      {data.item.title.toUpperCase()}
                    </Text>
                  </TouchableOpacity>
                )}
              />
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

  modalTitle: {
    color: Colors.PRIMARY,
    fontSize: 18,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    fontWeight: "bold",
  },
});

export default ModalLanguage;
