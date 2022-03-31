import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import * as NewListActions from "../../actions/TasksActions";
import { newList } from "../../actions/TasksActions";
import { Colors } from "../../styles";

const CreateListScreen = (props) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const titleChangeHandler = (text) => {
    setValue(text);
  };

  const saveTask = () => {
    dispatch(NewListActions.newList(value));

    setTimeout(() => {
      setLoading(false);
      props.navigation.goBack();
    }, 500);

    setLoading(true);
  };
  return (
    <View style={styles.screen}>
      <TextInput
        placeholder="Create a new List"
        value={value}
        onChangeText={titleChangeHandler}
        style={{
          backgroundColor: "#f1f1f1",
          padding: 20,
        }}
      />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <Button title="save" onPress={saveTask} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.LIGHT,
  },
});

export default CreateListScreen;
