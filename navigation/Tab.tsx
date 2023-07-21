import React from 'react';
import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import Summary from '../screens/Summary';
import AddExpenses from '../screens/AddExpenses';
import Statistics from '../screens/Statistics';
import MyAccount from '../screens/MyAccount';
import MarketIcon from '../assets/icons/MarketIcon';
import MoneyIcon from '../assets/icons/MoneyIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import AddIcon from '../assets/icons/AddIcon';
import HomeIcon from '../assets/icons/HomeIcon';

const Tab = createBottomTabNavigator();

const screenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 80,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
};

const Tabs: React.FC = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? styles.selectedBtn : undefined}>
                <View>
                  {focused ? <HomeIcon fillColor="#FFFFFF" /> : <HomeIcon />}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? styles.selectedBtn : undefined}>
                <View>
                  {focused ? (
                    <MarketIcon fillColor="#FFFFFF" />
                  ) : (
                    <MarketIcon />
                  )}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="AddExpenses"
        component={AddExpenses}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={styles.addContainer}>
                <View
                  style={focused ? [styles.addBtn, styles.add] : styles.addBtn}>
                  <AddIcon />
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? styles.selectedBtn : undefined}>
                <View>
                  {focused ? <MoneyIcon fillColor="#FFFFFF" /> : <MoneyIcon />}
                </View>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={focused ? styles.selectedBtn : undefined}>
                <View>
                  {focused ? (
                    <SettingIcon fillColor="#FFFFFF" />
                  ) : (
                    <SettingIcon />
                  )}
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  addBtn: {
    width: 55,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#08979D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    transform: [{rotate: '45deg'}],
  },
  addContainer: {
    padding: 10,
    top: -30,
    borderRadius: 40,
    backgroundColor: '#ffffff',
    elevation: 2,
  },
  selectedBtn: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#08979D',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
