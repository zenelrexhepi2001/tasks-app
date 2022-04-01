import React, { useState } from 'react'; 
import {View,Text,StyleSheet,TextInput,Button} from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../../styles';

import * as TasksActions from '../../actions/TasksAddActions';


const CreateTaskScreen = props => {
    

    const [valueTask,setValueTask] = useState('');
    const [time,setTime] = useState('');

    const dispatch = useDispatch();

    const TasksTextChange = text => {
        setValueTask(text);
    }

    const saveTask = () => {
        dispatch(TasksActions.addTodo(valueTask));
        props.navigation.navigate('Tasks');
    }


    return (
        <View style={styles.screen}>
            <TextInput
            placeholder='Enter a task'
            style={styles.formControl}
            value={valueTask}
            onChangeText={TasksTextChange}
            />
        
            <Button title="save" onPress={saveTask}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.LIGHT,
    }
});

export default CreateTaskScreen;