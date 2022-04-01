import React,{useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,SafeAreaView,SectionList} from 'react-native';
import { Header } from '../../components/atoms';
import { Colors } from '../../styles';
import { useSelector } from 'react-redux';
import {List,AddTask} from '../../components/atoms';
import { useDispatch } from 'react-redux';
import * as TasksActions from '../../actions/TasksActions';
import {TaskList} from '../../components/organisms';
import * as TodoActions from '../../actions/TasksAddActions';

const HomeScreen = props => {
    const displayList = useSelector(state => state.TaskData.data);
    const displayTasks = useSelector(state => state.AddTasks.dataTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TasksActions.fetchList());
        dispatch(TodoActions.fetchTodo());
    },[dispatch]);

    return (
        <SafeAreaView style={styles.hero}>
            <View style={styles.listContainer}>
            <FlatList
              data={displayList}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              renderItem={(post) => (
                  <List
                   title={post.item.title}
                   border={post.item.border}
                   onSelect={() => props.navigation.navigate('create',{
                     //  id: post.item.id,
                   })}
                  />
              )}
              horizontal
              style={styles.col}
            />
             <AddTask onSelect={() => props.navigation.navigate('create')}/>
             <View style={styles.bottom}>
            <FlatList
              data={displayTasks}
              keyExtractor={item => item.id}
              renderItem={(itemData) => (
              
                 <TaskList
                   title={itemData.item.title}
                   time={itemData.item.time}
                   onClick={() => props.navigation.navigate('create-task')}
                 />
             
              )}
            />
            </View>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    hero: {
        backgroundColor: Colors.LIGHT,
        flex: 1,
    },

    col: {
        paddingTop: 50,
        paddingLeft: 43,
    },

    bottom: {
       paddingTop: 70,
    }

});

export default HomeScreen;