import React, {PureComponent} from 'react';
import {View, StyleSheet} from 'react-native';

import {Card} from '../../Card/Card';
import {Chart} from '../../chart/Chart';
import {Rewards} from '../../rewards/Rewards';

import {store} from '../../../app/data/store';

class Body extends PureComponent {

    state = {
        userData: []
    };

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                userData: this.oneArrDeep(store.getState().remote.SORTED_REMOTE_DATA[store.getState().user.USER])
            });
        });
    }

    oneArrDeep = (userData) => {
        if(!userData)
            return;

        const arr = [];
        for(let i = 0, len = userData.length; i < len; i += 1) {
            arr.push(userData[i][1]);
        }
        return arr;
    }

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
                        data={this.state.userData}
                        title="Solar Employment Growth"
                        yAxisTitle="title1"
                        xAxisTitle="title2"
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


export {Body};
