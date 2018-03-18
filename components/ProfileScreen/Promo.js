import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class Promo extends Component {
    render() {
        return (
            <View style={styles.root}>
                <View style={styles.right}>
                    <Text>Solar North Corp.</Text>
                    <Text>We will install solar system completely free and you will get 20% of all solar energy cost.</Text>
                </View>
                <View style={styles.right}>
                    <Text>Solar North Corp.</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
    },
    left: {
        flex: 2,
    }
});

export default Promo;
