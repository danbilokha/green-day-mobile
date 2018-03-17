import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProgressView from './ProgressView';

export class Dashboard extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ProgressView/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
    }
});
