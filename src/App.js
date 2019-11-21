/*
 * Filename: /Users/ghazifadil/Documents/web_app/kriyapeople/src/App.js
 * Path: /Users/ghazifadil/Documents/web_app/kriyapeople
 * Created Date: Thursday, November 21st 2019, 10:40:35 am
 * Author: Ghazi Fadil
 * 
 * Copyright (c) 2019 Your Company
 */
import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './screens/Home';
import Cart from './screens/Cart';
import { Context } from './context/Context';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Cart: {screen: Cart},
  },
  {
    initialRouteName: 'Home',
    /* The header config from HomeScreen is now here */
    // headerMode: 'none'
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'blue',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppRouter = createAppContainer(MainNavigator);

export default class App extends Component {
  render() {
    return(
      <Context>
        <AppRouter/>
      </Context>
    )
  }
}