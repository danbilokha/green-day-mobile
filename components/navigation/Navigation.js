import React from 'react';
import {Dashboard} from '../Dashboard';
import { Image, StyleSheet, Text, Platform } from 'react-native';
import firebase from "firebase";

import {ProfileScreen} from '../ProfileScreen/ProfileScreen';
import {TabBarTop, TabNavigator} from 'react-navigation';
import Icon from '../Icon';
import HomeScreen from '../HomeScreen';
import NotificationScreen from '../NotificationScreen';
import '../../app/settings/notification.settings';
import '../../app/data/remote';

export default TabNavigator(
    {
        Dash: { screen: Dashboard },
        Notifications: { screen: NotificationScreen },
        Home: { screen: HomeScreen },
        Profile: { screen: ProfileScreen },
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;

                if (routeName === 'Dash') {
                    iconName = 'Dash';
                }

                if (routeName === 'Home') {
                    iconName = 'Home';
                }

                if (routeName === 'Notifications') {
                    iconName = 'Notifications';
                }

                if (routeName === 'Profile') {
                    return (
                        <Image
                            style={styles.image}
                            source={require('../../assets/images/avatar.png')}
                        />
                    );
                }

                return <Icon name={iconName} size={25} fill={tintColor}/>;
            },
            tabBarLabel: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName = routeName;

                if (routeName === 'Profile') {
                    const user = firebase.auth().currentUser;
                    if (user) {
                        iconName = user.displayName || user.email || routeName;
                    }
                }

                return <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}}
                             numberOfLines={1}>{iconName}</Text>
            },
        }),
        tabBarComponent: TabBarTop,
        tabBarPosition: 'top',
        tabBarOptions: {
            activeTintColor: '#00AAA5',
            inactiveTintColor: '#667580',
            showIcon: true,
            labelStyle: {
                fontSize: 7,
            },
            style: {
                backgroundColor: 'transparent',
                marginTop: Platform.OS === 'ios' ? 25 : 50,
            },
            tabBar: {
                backgroundColor: '#fbfbfb',
                borderBottomStyle: 'solid',
                borderBottomWidth: 3,
                borderBottomColor: 'red',
            },
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);

const styles = StyleSheet.create({
    text: {
        color: '#333',
    },
    image: {
        width: 30,
        height: 30,
    },
    tabLabel: {
        marginTop: 10,
    }
});
