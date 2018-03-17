import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { TabNavigator, TabBarTop } from 'react-navigation';
import firebase from 'firebase';
import Icon from './Icon';
import ProgressView from './ProgressView';

export class Dashboard extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <ProgressView />
        </View>
      );
    }
}

export default TabNavigator(
  {
    Dash: { screen: Dashboard },
    Notifications: { screen: Dashboard },
    Home: { screen: Dashboard },
    Profile: { screen: Dashboard },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
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
              source={require('../assets/images/avatar.png')}
            />
          );
        }

        return <Icon name={iconName} size={25} fill={tintColor} />;
      },
      tabBarLabel: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = routeName;

        if (routeName === 'Profile') {
          const user = firebase.auth().currentUser;
          if (user) {
            iconName = user.displayName || user.email || routeName;
          }
        }

        return <Text style={{textAlign: 'center', fontSize: 10, marginTop: 10}} numberOfLines={1}>{iconName}</Text>
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
        marginTop: 25,
      },
      tabBar: {
        backgroundColor: "#fbfbfb",
        borderBottomStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: "red",
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
    container: {
      flex: 1,
      justifyContent: 'center',
      flexDirection: 'row',
    },
    image: {
      width: 30,
      height: 30,
    },
    tabLabel: {
      marginTop: 10,
    }
  });