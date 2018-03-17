import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator, TabBarBottom} from 'react-navigation';
import {Menu} from '../menu/Menu';

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Menu/>
                <Text style={styles.text}>Welcome to the Member area, Es</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: '#333',
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
});

export {ProfileScreen};
