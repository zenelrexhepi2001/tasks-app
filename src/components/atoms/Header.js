import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

import Menu from '../../assets/svg/menu.svg';
import { Colors } from '../../styles';

const Header = props => {
    return (
       <View style={styles.header}>
           <View style={styles.headerContent}>
               <TouchableOpacity style={styles.headerMenu}>
                   <Menu width={30} height={30} style={styles.logo}/>
               </TouchableOpacity>
               <View style={styles.headerTitle}>
                   <Text style={styles.title}>Tasks</Text>
               </View>
           </View>
       </View>
    )
}

export const styles = StyleSheet.create({
    header: {
       width: '100%',
       paddingTop: 54,
    },

    headerMenu: {
     // position: 'absolute',
     paddingLeft: 20,

     backgroundColor: 'red',
    },

    logo: {
     // flex: 1,
    },

    headerContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },

    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
    },

    title: {
        color: Colors.PRIMARY,
        textAlign: 'center',
        fontSize: 35,

    }
});


export default Header;