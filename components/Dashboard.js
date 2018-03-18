import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import firebase from 'firebase';
import Icon from './Icon';
import ProgressView from './ProgressView';
import DashboardGenerateBox from './DashboardGenerateBox';
import { ProfileScreen } from './ProfileScreen/ProfileScreen';

export class Dashboard extends React.Component {
    componentDidMount() {

    }

    render() {
      return (
        <View style={styles.container}>
          <ScrollView>
            <ProgressView />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15}}>
              <DashboardGenerateBox title="generate today:" value="1.32kW" style={{marginRight: 10}}/>
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
