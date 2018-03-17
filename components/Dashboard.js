import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {TabNavigator, TabBarTop} from 'react-navigation';
import firebase from 'firebase';
import Icon from './Icon';
import ProgressView from './ProgressView';
import {ProfileScreen} from './ProfileScreen/ProfileScreen';

export class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ProgressView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    }
});
