import React from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity,SafeAreaView} from 'react-native';
import { Header } from '../../components/atoms';
import { Colors } from '../../styles';
import { useSelector } from 'react-redux';
import { List } from '../../components/atoms';

import Add from '../../assets/svg/add.svg';

const HomeScreen = props => {
    const displayList = useSelector(state => state.TaskData.data);
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
                  />
              )}
              horizontal
              style={styles.col}
            />
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
    }
});

export default HomeScreen;