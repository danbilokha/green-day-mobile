import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ style, onPress, children }) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.button}
    >
        <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 20,
        alignItems: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: '#4a90e2',
    },
    text: {
        color: '#ffffff',
        fontWeight: '700',
        fontSize: 18,
    },
});

export { Button };