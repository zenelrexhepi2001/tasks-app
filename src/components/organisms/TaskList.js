import React,{useState} from 'react'; 
import {View,Text,StyleSheet,Pressable,TouchableOpacity} from 'react-native'; 
import Checkbox from 'expo-checkbox';
import MenuTask from '../../assets/svg/menu-task.svg';
import Clock  from '../../assets/svg/clock.svg';

import { Colors,Typography } from '../../styles';


const TaskList = props => {
    const [isChecked,setIsChecked] = useState(false);
    return (
          <View style={styles.listContainer}>
              <View style={styles.flex}>
                  <Checkbox
                    value={isChecked}
                    onValueChange={setIsChecked}
                    color={isChecked ? '#536DFE' : '#E8E8E8'}
                    style={styles.checkbox}
                  />
                  <Text style={styles.title}>{props.title}</Text>
               </View>
               <View style={styles.listContent}>
                   <TouchableOpacity>
                      
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btnPrimary} onPress={props.onClick}>
                       <Clock width={20} height={20} style={styles.clock}/>
                       <Text style={styles.btnText}>{props.time}</Text>
                   </TouchableOpacity>
               </View>
          </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        paddingLeft: 30,
        paddingBottom: 36,
        overflow: 'hidden',
    },

    flex: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: '#E8E8E8',
        marginRight: 17,
        backgroundColor: 'red',
        borderRadius: 5,
    },

    title: {
        color: Colors.GRAY,
        fontSize: 20,
        fontFamily: Typography.FONT_FAMILY_POPPIS,
    },

    listContent: {
        paddingLeft: 50,
        marginVertical: 5,
    },

    btnPrimary: {
        backgroundColor: '#00BFA6',
        flexDirection: 'row',
        alignItems: 'center',
        width: 160,
        paddingLeft: 14,
        paddingRight: 14,
        paddingTop: 8,
        paddingBottom: 8,
        borderRadius: 5,
    },

    clock: {
        marginRight: 4.43,
    },

    btnText: {
        color: Colors.LIGHT,
        fontSize: 14,
        fontFamily: Typography.FONT_FAMILY_POPPIS,
    }
});

export default TaskList;