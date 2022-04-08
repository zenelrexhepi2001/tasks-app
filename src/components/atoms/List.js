import React from 'react'; 
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { Colors } from '../../styles/index';


const List = props => {
    return (
        <View style={styles.list}>
            <View style={styles.listContent}>
                <TouchableOpacity onPress={props.onSelect}>
                    <Text style={styles.title}>{props.title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles  = StyleSheet.create({
    list: {
       marginRight: 28,
    },

    title: {
        fontSize: 19,
        color: Colors.PRIMARY,
    }
});

export default List;