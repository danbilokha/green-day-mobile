import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Promo from './Promo';
import { Header } from './ProfileScreen/header/Header';

class NotificationScreen extends Component {
    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    <Text style={{ marginTop: 10 }}>You have no notifications</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default NotificationScreen;