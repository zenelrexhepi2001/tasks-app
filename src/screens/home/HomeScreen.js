import React,{useEffect} from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,SafeAreaView} from 'react-native';
import { Header } from '../../components/atoms';
import { Colors } from '../../styles';
import { useSelector } from 'react-redux';
import {List,AddTask} from '../../components/atoms';
import { useDispatch } from 'react-redux';
import * as TasksActions from '../../actions/TasksActions';

const HomeScreen = props => {
    const displayList = useSelector(state => state.TaskData.data);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(TasksActions.fetchList());
    },[dispatch]);

    return (
        <SafeAreaView style={styles.hero}>
            <View style={styles.listContainer}>
            <FlatList
              data={displayList}
              keyExtractor={item => item.id}
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

});

export default HomeScreen;