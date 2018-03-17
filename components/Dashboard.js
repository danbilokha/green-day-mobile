import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';

export class Dashboard extends React.Component {
    render() {
      return (
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to the Dashboard</Text>  
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
    // navigationOptions: ({ navigation }) => ({
    //   tabBarIcon: ({ focused, tintColor }) => {
    //     const { routeName } = navigation.state;
    //     let iconName;
    //     // if (routeName === 'Home') {
    //     //   iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    //     // } else if (routeName === 'Settings') {
    //     //   iconName = `ios-options${focused ? '' : '-outline'}`;
    //     // }

    //     if (routeName === 'Dash') {
    //       iconName = 'dash';
    //     }

    //     // You can return any component that you like here! We usually use an
    //     // icon component from react-native-vector-icons
    //     return <Ionicons name={iconName} size={25} color={tintColor} />;
    //   },
    // }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'top',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
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
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
  });