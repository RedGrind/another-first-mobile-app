import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, Platform } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Firebase related imports 
import * as firebase from 'firebase';
import 'firebase/app';
import 'firebase/firestore';

// Imports related to the different screens
import Signup from './screens/Signup';
import Home from './screens/Home';
import Account from './screens/Account';
import Comments from './screens/Comments';
import Login from './screens/Login';
import Posts from './screens/Posts'; 
import Settings from './screens/Settings';


const webPreviewWidth = 300;
const webPreviewHeight = 550;

Constants.statusBarHeight;
const screenWidth =
  Platform.OS === 'web' ? webPreviewWidth : Dimensions.get('screen').width;
const screenHeight = 
  Platform.OS === 'web'
    ? webPreviewHeight
    : Dimensions.get('screen').height - Constants.statusBarHeight;

// Firebase specifics 
if(!firebase.apps.length){
  const firebaseConfig = {
    apiKey: "AIzaSyBRe5KrF8P-ot-14Cq7tJ0ssrlsVTEXrxI",
    authDomain: "code2college-mobile-apps-dev.firebaseapp.com",
    projectId: "code2college-mobile-apps-dev",
    storageBucket: "code2college-mobile-apps-dev.appspot.com",
    messagingSenderId: "985072672165",
    appId: "1:985072672165:web:e985e878dd2bf27a411c4c",
    measurementId: "G-W1FJXM9JT6"
  }
  //firebase.initializeApp()
}

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer screenOptions={{ headerMode: 'none' }}>
      <Stack.Navigator 
        initialRouteName= "Home"
        screenOptions= {{ animationEnabled: false, headerShown: false }}>
          <Stack.Screen name="Signup" component={Signup}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Comments" component={Comments}/>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="Account" component={Account}/>
          <Stack.Screen name="Posts" component={Posts}/>
          <Stack.Screen name="Settings" component={Settings}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;