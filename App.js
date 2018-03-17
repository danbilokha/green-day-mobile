import React from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const Application = StackNavigator(
  {
    Login: { screen: Login },
    Dashboard: { screen: Dashboard }
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
      <Application />
    );
  }
}
