import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { Header } from '../../components/atoms';
import { Colors } from '../../styles';

const HomeScreen = props => {
    return (
        <View style={styles.hero}>
        </View>
    )
}


const styles = StyleSheet.create({
    hero: {
        backgroundColor: Colors.LIGHT,
        flex: 1,
    }
});

export default HomeScreen;