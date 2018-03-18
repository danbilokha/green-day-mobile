import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

import {Card} from '../../Card/Card';
import {Chart} from '../../chart/Chart';
import {Rewards} from '../../rewards/Rewards';

class Body extends PureComponent {
    render() {
        return (
            <View style={styles.container}>
                <Rewards
                    text="Winner March 2018"
                    color="gray"
                />
                <Rewards
                    text="Winner November 2018"
                    color="blue"
                />
                <Rewards
                    text="Winner October 2018"
                    color="yellow"
                />

                <Card
                    title="Current solar system state">
                    <Chart
                        title="Solar Employment Growth"
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
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    }
});


export { Body };
