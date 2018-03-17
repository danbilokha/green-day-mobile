import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => (
    <View style={styles.container}>
        <TextInput
            autoCorrect={false}
            onChangeText={onChangeText}
            placeholder={placeholder}
            style={styles.input}
            secureTextEntry={secureTextEntry}
            value={value}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        width: '100%',
        marginBottom: 20,
    },
    label: {
        padding: 5,
        paddingBottom: 0,
        color: '#333',
        fontSize: 17,
        fontWeight: '700',
        width: '100%',
    },
    input: {
        borderColor: 'gray',
        height: 40,
        borderBottomColor: '#468ee5',
        borderBottomWidth: 2,
        paddingRight: 5,
        paddingLeft: 5,
        paddingBottom: 2,
        color: '#333',
        fontSize: 18,
        width: '100%',
    },
});

export { Input };
