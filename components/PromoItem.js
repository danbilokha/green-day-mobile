import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from './Icon';

class PromoItem extends Component {
    render() {
        const { icon, description } = this.props;
        return (
            <View style={styles.root}>
                <Icon name={icon} fill="#ffffff" style={{ marginRight: 10 }}/>
                <Text style={styles.description}>{description}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    description: {
        fontFamily: 'Lato',
        fontWeight: 'bold',
        fontSize: 18,
        color: '#ffffff',
    }
})

export default PromoItem;