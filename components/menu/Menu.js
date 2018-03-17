import React, {PureComponent} from 'react';
import {Avatar} from 'react-native-material-design';
import {Profile} from '../Profile';
import {TabBarBottom, TabNavigator} from 'react-navigation';
import {Text} from 'react-native';

class Menu extends PureComponent {

    render() {
        return (
            <nav className='nav'>
                <Text>Navigation</Text>
            </nav>
        )
    }
}

export default TabNavigator(
    {
        First: {screen: Profile},
        Second: {screen: Profile},
    },
    {
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        animationEnabled: false,
        swipeEnabled: false,
    }
);


export {Menu};