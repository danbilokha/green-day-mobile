import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ProgressViewItem from './ProgressViewItem';
import { Button } from './Button';

class ProgressView extends Component {
    state = {
        eventName: null,
        stages: null,
    };

    componentDidMount() {
        const { eventName, stages } = require('../sunothon.json');
        this.setState({
            eventName,
            stages,
        });

        // fetch('../sunothon.json').then(r => {
        //     console.log('aaaaaa', r.json());
        //     console.log(345);
        // }).catch((e) => {
        //     console.log(e);
        //     console.log(777);
        // });
    }

    handleButtonPress = () => {
        console.log('button was clicked');
    };

    render() {
        const { eventName, stages } = this.state;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>{eventName}</Text>
                <ScrollView style={styles.list} horizontal={true}>
                    {
                        stages && stages.length > 0 && stages.map((stage, index) => (
                            <ProgressViewItem
                                key={stage.id}
                                stage={stage}
                                first={index === 0}
                                last={stages.length === index + 1}
                            />
                        ))
                    }
                </ScrollView>
                <Button onPress={this.handleButtonPress}>Join community</Button>
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
    },
    list: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    }
});

export default ProgressView;