//This is an example of Tab inside Navigation Drawer in React Native//
import React from 'react';
//import react in our code.
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {  createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';

//Import all the screens for Tab
import ListeStructures from './ListeStructures';
import RecherchePage from './RecherchePage';

const Menu = createMaterialTopTabNavigator(
  {
    Structures: { screen: ListeStructures },
    Recherche: { screen: RecherchePage },
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#DD614A',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);
const TabHelper = createStackNavigator({
  TabScreen: {
    screen: Menu,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(TabHelper);
