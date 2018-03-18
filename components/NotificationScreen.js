import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, Text} from 'react-native';
import {Header} from './ProfileScreen/header/Header';
import {store} from '../app/data/store';
import {Card} from './Card/Card';

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

    componentWillUnmount() {
        console.log('here');
    }

    render() {
        const {notifications} = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Header/>
                    {
                        (notifications && notifications.length > 0) ?
                            notifications.map(({notification, date}, index) => (
                                <Card key={index}>
                                    <View style={{flexDirection: 'column'}}>
                                        <Text>{date}</Text>
                                        <Text>{notification}</Text>
                                    </View>
                                </Card>
                            )) :
                            <Text style={{marginTop: 10}}>You have no notifications</Text>
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