import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useDispatch } from "react-redux";
import { Colors, Typography } from "../../styles";

import * as TasksActions from "../../actions/TasksAddActions";

import {ButtonPrimary} from "../../components/UI"
import Asyncstorage from '@react-native-async-storage/async-storage';

const CreateTaskScreen = (props) => {
  const [valueTask, setValueTask] = useState("");
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState("");

  const dispatch = useDispatch();

  const TasksTextChange = (text) => {
    setValueTask(text);
  };

  const saveData = async () => {
      try {
          await Asyncstorage.setItem('private_key',valueTask);
      }catch (err) {
          alert(err);
          console.log(err);
      }
  }

  const storeData = async () => {
      try {
          let data = await Asyncstorage.getItem('private_key');
           if(data !== null) {
               saveData(data);
                 setTimeout(() => {
                     let msg = 'Data saved successfully Asyncstorage!';
                     alert(msg);
                 },1000);
           }
      }catch (err) {
          alert(err);
          console.log(err);
      }
  }

  //call functions save -> data
  useEffect(() => {
      saveData();
  },[storeData]);
  

  const saveTask = () => {
    dispatch(TasksActions.addTodo(valueTask));

    setTimeout(() => {
      props.navigation.goBack();
      setLoading(false);
    }, 1100);

    setLoading(true);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.formControl}>
          <TextInput
            name="Task"
            placeholder="Please write a task"
            value={valueTask}
            onChangeText={TasksTextChange}
            style={styles.formControlElement}
          />
        </View>
        <View style={styles.btnEnd}>
          {loading ? (
            <ActivityIndicator size="small" color={Colors.PRIMARY} />
          ) : (
           <ButtonPrimary onSelect={saveTask}/>
          )}
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
    margin: 15,
  },

  formControl: {
    width: "100%",
  },

  formControlElement: {
    width: "100%",
    borderColor: Colors.PRIMARY,
    color: Colors.PRIMARY,
    fontFamily: Typography.FONT_FAMILY_POPPIS,
    fontSize: 16,
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  btnEnd: {
    paddingTop: 50,
    alignItems: "center",
  },

});

export default CreateTaskScreen;
