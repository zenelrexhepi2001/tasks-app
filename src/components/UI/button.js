import React from 'react'; 
import {Text,TouchableOpacity,StyleSheet} from 'react-native'; 
import { Colors,Typography } from '../../styles';

const ButtonPrimary = props => {
    return (
        <TouchableOpacity style={styles.btnPrimary} onPress={props.onSelect}>
        <Text style={styles.btnTitle}>Add Task</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnPrimary: {
        backgroundColor: Colors.SUCCESS,
        paddingLeft: 50,
        paddingRight: 50,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
        borderRadius: 30,
        elevation: 20,
        shadowColor: Colors.PRIMARY,
      },
    
      btnTitle: {
        color: Colors.LIGHT,
        fontFamily: Typography.FONT_FAMILY_POPPIS,
        fontSize: 16,
      },
});


export default ButtonPrimary;