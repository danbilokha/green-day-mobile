import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ProgressView extends Component {
    componentDidMount() {

    }
    
    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Sunothon 2018</Text>
                <Text>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        paddingTop: 10,
        backgroundColor: '#f9f8e7',
    },
    title: {
        fontFamily: 'Lato',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ccc',
      
    }
});

export default ProgressView;