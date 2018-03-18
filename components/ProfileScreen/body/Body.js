import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Promo from '../Promo';
import { Chart } from '../../chart/Chart';

class Body extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Promo />
                <View>
                    <Chart
                        title="Current solar system state"
                        yAxisTitle="title1"
                        xAxisTitle="title2"
                    />
                </View>
                <View>
                    <Chart
                        title="Current solar system state 2"
                        yAxisTitle="title55"
                        xAxisTitle="title4"
                    />
                </View>
                <View>
                    <Chart
                        title="Current solar system state 2"
                        yAxisTitle="title5"
                        xAxisTitle="title4"
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
});


export { Body };
