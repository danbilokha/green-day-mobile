import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import Promo from './Promo';
import { Header } from './ProfileScreen/header/Header';
import { store } from '../app/data/store';

class NotificationScreen extends Component {
    state = {
        notifications: store.getState().notifications,
    };

    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                notifications: store.getState().notifications,
            });
        });
    }

    render() {
        const { notifications } = this.state;

        return(
            <ScrollView>
                <View style={styles.container}>
                    <Header />
                    {
                        (notifications && notifications.length > 0) ?
                        notifications.map(({ notification, date }) => (
                            <View style={{flexDirection: 'row'}}>
                                <Text>{date}</Text> <Text>{notification}</Text>
                            </View>
                        )) :
                        <Text style={{ marginTop: 10 }}>You have no notifications</Text>
                    }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});

export default NotificationScreen;