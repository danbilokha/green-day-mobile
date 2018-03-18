import React from 'react';
import {StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import Login from './components/Login';
import Entry from './components/navigation/Navigation';

import './app/settings/notification.settings';
import './app/data/remote';
import {store} from './app/data/store';

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
            <Provider store={store}>
                <Application/>
            </Provider>
        );
    }
}
