import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import ProgressView from './ProgressView';
import DashboardGenerateBox from './DashboardGenerateBox';
import {store} from '../app/data/store';

export class Dashboard extends React.Component {

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

    calculateTodayData = () => {
        console.log(this.state.userData);
    }

    render() {
        console.log(this.calculateTodayData());
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ProgressView/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
                        <DashboardGenerateBox
                            title="generate today:"
                            value="1.32kW"
                            style={{marginRight: 10}}/>
                        <DashboardGenerateBox title="generate May:" value="12.32kW" style={{marginRight: 0}}/>
                    </View>
                </ScrollView>
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
