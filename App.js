import React, { Component } from 'react';
//navigation entre les pages
import {  createAppContainer} from 'react-navigation';
import {  createStackNavigator,} from 'react-navigation-stack';
import {  createDrawerNavigator,} from 'react-navigation-drawer';

import { View, Image, TouchableOpacity,} from 'react-native';
//Import page Menu
import Menu from './pages/Menu';
import contact from './pages/contact';
 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {/*Donute Button Image */}
          <Image
            source={require('./pages/images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const FirstActivity_StackNavigator = createStackNavigator({
  //All the screen from the Screen1 will be indexed here
  First: {
    screen: Menu,
    navigationOptions: ({ navigation }) => ({
      title: 'ASSAB',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#DD614A',
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: '#fff',
    }),
  },
});

const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: contact,
    navigationOptions: ({ navigation }) => ({
      title: 'Contact',
      headerLeft: ()=> <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#DD614A',
      },
      headerTintColor: '#fff',
    }),
  },
});

//Drawer Navigator for the Navigation Drawer / Sidebar
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Menu: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Menu',
    },
  },

  Contact: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Contact',
    },
  },
});


export default createAppContainer(DrawerNavigatorExample);
//export default createAppContainer(App);

//MENU SANS LE HAUT 


/*
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {  createAppContainer } from 'react-navigation';
import {  createStackNavigator } from 'react-navigation-stack';

//Deux pages à afficher
import RecherchePage from './pages/RecherchePage';
import ListeStructures from './pages/ListeStructures';

const App = createMaterialTopTabNavigator(
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
        backgroundColor: '#FF9800',
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
    screen: App,
    navigationOptions: {
      header: null,
    },
  },
});
export default createAppContainer(TabHelper);
*/
