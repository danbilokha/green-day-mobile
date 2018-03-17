import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { UpperCaseText } from './UpperCaseText';

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <UpperCaseText style={styles.title}>Green City</UpperCaseText>
                <UpperCaseText style={styles.subTitle}>Solarmarathon</UpperCaseText>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderStyle: 'solid',
        paddingTop: 10,
        paddingBottom: 10,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 34,
        marginBottom: 10,
        fontWeight: '300',
        color: '#ffffff',
        textAlign: 'center'
    },
    subTitle: {
        fontFamily: 'Lato',
        fontSize: 19,
        letterSpacing: 5.7,
        color: '#ffffff',
        textAlign: 'center'
    }
});

export { Header };
