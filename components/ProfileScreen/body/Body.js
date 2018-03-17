import React, {PureComponent} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Chart} from '../../chart/Chart';
import {window} from '../../global/global.calculation';

class Body extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Chart
                    title="Current solar system state"
                    yAxisTitle="title1"
                    xAxisTitle="title2"
                />
                <Chart
                    title="Current solar system state 2"
                    yAxisTitle="title3"
                    xAxisTitle="title4"
                />
                <Text>
                    body
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       marginTop: 10,
       flex: 1,
       flexDirection: 'row',
       justifyContent: 'flex-start',
       maxWidth: window.width
   }
});


export {Body};
