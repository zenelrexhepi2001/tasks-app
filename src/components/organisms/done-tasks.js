import React, { useEffect, useState } from 'react'; 
import {View,Text,StyleSheet,FlatList,TouchableOpacity} from 'react-native'; 
import { Checkbox } from 'expo-checkbox';
import { useDispatch, useSelector } from 'react-redux';
import * as TaskActions from '../../actions/TasksAddActions';
import { Typography,Colors } from '../../styles';
import { TaskList } from '../../components/organisms';

const DoneTasks = props => {
    const [isChecked,setIsChecked] = useState(false);
    const displayedTaskDel = useSelector((state) => state.AddTasks.dataTasks);

    console.warn(displayedTaskDel);
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(TaskActions.deleteTask())
    },[dispatch]);

    return (
        <View>
             <TaskList/>
        </View>
    )
}

const styles = StyleSheet.create({
 
});


export default DoneTasks;