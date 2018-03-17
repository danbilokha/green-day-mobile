import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {Header} from './header/Header';
import {Body} from './body/Body';

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header/>
                <Body/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});

export {ProfileScreen};
