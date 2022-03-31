import React from 'react'; 
import {StyleSheet,TouchableOpacity} from 'react-native'; 
import Add from '../../assets/svg/add.svg';
import { Colors } from '../../styles';

const AddCircle = ({navigation}) => {
    return (
        <TouchableOpacity
        style={styles.circleAdd}>
            <Add width={25} height={25}/>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    circleAdd: {
        backgroundColor: Colors.SUCCESS,
        width: 60,
        height: 60,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 16,
    }

});

export default AddCircle;