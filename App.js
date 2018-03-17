import React from 'react';
import {StackNavigator} from 'react-navigation';
import Login from './components/Login';
import {ProfileScreen} from './components/ProfileScreen/ProfileScreen';

const Application = StackNavigator(
    {
        Home: {screen: Login},
        ProfileScreen: {screen: ProfileScreen}
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
