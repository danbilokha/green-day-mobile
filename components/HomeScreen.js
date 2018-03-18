import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Promo from './Promo';
import { Header } from './ProfileScreen/header/Header';

class HomeScreen extends Component {
    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    <Promo />
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

export default HomeScreen;