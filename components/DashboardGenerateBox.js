import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class DashboardGenerateBox extends Component {
    render() {
        const { title, value, style } = this.props;
        return (
            <View style={[styles.container, style]}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.content}>{value}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#b3e6e4',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1,
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 14,
        color: '#9b9b9b',
    },
    content: {
        fontFamily: 'Lato',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4a90e2',
    },
});

export default DashboardGenerateBox;