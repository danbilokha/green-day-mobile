import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ActivityIndicator,
  AsyncStorage,
  KeyboardAvoidingView
} from 'react-native';
import firebase from 'firebase';
import { Input } from './Input';
import { Button } from './Button';
import { LiveUpdate } from './LiveUpdate';
import { Header } from './Header';

export default class Login extends React.Component {
    state = {
      email: '',
      password: '',
      authenticating: false,
    };
  
    componentWillMount() {
      const firebaseConfig = {
        apiKey: 'AIzaSyDktkqjYjjdtOSj_QgWK1psmuCVFPavuq0',
        authDomain: 'green-day-navigation.firebaseapp.com',
      };
  
      firebase.initializeApp(firebaseConfig);
  
      firebase.auth().onAuthStateChanged((user) => {
        console.log('user: ', user);

        if (user) {
          this.props.navigation.navigate('Entry');
        }
      });
    }

    componentDidMount() {
        AsyncStorage.removeItem('user');
        this.loadInitialState().done();
    }
  
    onPressSignIn() {
      this.setState({
        authenticating: true,
      });
      firebase.auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(r => {
            AsyncStorage.setItem('user', 'y');
            console.log('sign in ', r);
        })
        .then(() => {
          this.setState({
            authenticating: false,
          });
          this.props.navigation.navigate('Entry');
        })
        .catch(() => {
            alert(123);
            this.setState({
                authenticating: false,
              });
        });
    }

    loadInitialState = async () => {
        const value = await AsyncStorage.getItem('user');

        console.log('value ', value);
        
        if (value !== null) {
            this.props.navigation.navigate('Entry');
        }
    };
  
    renderCurrentState() {
      if (this.state.authenticating) {
        return (
          <View style={styles.formWrapper}>
            <Header />
            <ActivityIndicator size="large" />
          </View>
        );
      }
  
      return (
        <View style={styles.formWrapper}>
          <Header />
          <View style={styles.form}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text}>Sign in</Text>
              <Text style={styles.textDisabled}>New user registration</Text>
            </View>
            <Input
              keyboardType="email-address"
              placeholder="Email"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Input
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            <Text style={styles.textPassword}>Forget password?</Text>
            <Button
              onPress={() => this.onPressSignIn()}>Sign In</Button>
          </View>
        </View>
      );
    }
  
    render() {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.wrapper}>
          <View style={styles.container}>
              {this.renderCurrentState()}
          </View>
          <Image
            style={styles.image}
            source={require('../assets/images/bg.png')}
          />
        </KeyboardAvoidingView>
      );
    }
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: '#86ddee',
    },
    container: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    formWrapper: {
      flex: 1,
    },
    form: {
      padding: 15,
      backgroundColor: '#ffffff',  
    },
    text: {
      color: '#4a90e2',
      marginRight: 30,
    },
    textDisabled: {
      color: '#cccccc',
      fontFamily: 'Lato',
    },
    textPassword: {
      color: '#cccccc',
      fontFamily: 'Lato',
      textAlign: 'right',
    },
    image: {
      flex: 1,
      width: '100%',
      resizeMode: Image.resizeMode.cover
    }
  });