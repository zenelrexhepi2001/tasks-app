import React from 'react'; 
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'; 
import { Colors } from '../../styles';
import Add from '../../assets/svg/add.svg';


const AddTask = props => {
    return (
        <View style={styles.center}>
        <TouchableOpacity style={styles.cirlceAdd} onPress={props.onSelect}>
            <Add width={15} height={15}/>
        </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
    },

    cirlceAdd: {
        backgroundColor: Colors.SUCCESS,
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    }
});

export default AddTask;