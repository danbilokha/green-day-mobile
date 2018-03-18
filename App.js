import React from 'react';
import {StackNavigator} from 'react-navigation';

import Login from './components/Login';
import Entry from './components/navigation/Navigation';
import './app/settings/notification';

const Application = StackNavigator(
    {
        Login: {screen: Login},
        Entry: {screen: Entry}
    },
    {
        navigationOptions: {
            header: false,
        },
    }
);

export default class App extends React.Component {
    render() {
        return (
            <Application/>
        );
    }
}
