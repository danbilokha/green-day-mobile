import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

import {Card} from '../../Card/Card';
import {Chart} from '../../chart/Chart';

class Body extends PureComponent {

    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <Chart
                        title="Current solar system state"
                        yAxisTitle="title1"
                        xAxisTitle="title2"
                    />
                </Card>
                <Card>
                    <Chart
                        title="Current solar system state 2"
                        yAxisTitle="title55"
                        xAxisTitle="title4"
                    />
                </Card>
                <Card>
                    <Chart
                        title="Current solar system state 2"
                        yAxisTitle="title5"
                        xAxisTitle="title4"
                    />
                </Card>
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


export {Body};
