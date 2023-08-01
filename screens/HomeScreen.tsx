import {Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import BackGround from '../components/BackGround';
import BellIcon from '../assets/icons/BellIcon';
import MenuIcon from '../assets/icons/MenuIcone';
import CalendarIcon from '../assets/icons/CalendarIcon';
import ArrowIcon from '../assets/icons/ArrowIcon';
import CardLayout from '../components/CardLayout';
import DogIcon from '../assets/icons/DogIcon';
import PigIcon from '../assets/icons/PigIcon';
import ReminderIcon from '../assets/icons/ReminderIcon';

const HomeScreen = () => {
  return (
    <BackGround>
      <ScrollView>
        <View
          style={{paddingTop: 36, paddingHorizontal: 24, marginBottom: 150}}>
          <View style={styles.headerContainer}>
            <View>
              <Text style={styles.textColor}>Welcome back</Text>
              <Text style={styles.textColor}>Prasanna</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={{marginRight: 36}}>
                <BellIcon />
              </View>
              <View>
                <MenuIcon />
              </View>
            </View>
          </View>
          <View style={{width: 209}}>
            <Text style={[styles.textColor, styles.headerText]}>
              Manage your expenses
            </Text>
          </View>
          <View style={styles.calendarContainer}>
            <View style={styles.monthContainer}>
              <Pressable style={{transform: [{rotate: '180deg'}]}}>
                <ArrowIcon />
              </Pressable>
              <Text style={[styles.textColor, {fontSize: 22, margin: 8}]}>
                June 2023
              </Text>
              <Pressable>
                <ArrowIcon />
              </Pressable>
            </View>
            <Pressable style={styles.canlenderStyle}>
              <CalendarIcon />
            </Pressable>
          </View>
          <View style={{marginBottom: 16}}>
            <CardLayout>
              <View style={styles.expenseWapper}>
                <View style={styles.expenseContainer}>
                  <Text style={styles.expenseText}>Income</Text>
                  <Text style={[styles.moneyText, {color: '#005257'}]}>
                    $0.00
                  </Text>
                </View>
                <View style={[styles.expenseContainer, styles.moneySpend]}>
                  <Text style={styles.expenseText}>Expenses</Text>
                  <Text style={[styles.moneyText, {color: '#B91D1D'}]}>
                    $0.00
                  </Text>
                </View>
                <View style={styles.expenseContainer}>
                  <Text style={styles.expenseText}>Total</Text>
                  <Text style={[styles.moneyText, {color: '#4D4D4D'}]}>
                    $0.00
                  </Text>
                </View>
              </View>
            </CardLayout>
          </View>
          <View style={{marginBottom: 34}}>
            <CardLayout>
              <View style={{paddingVertical: 75}}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <DogIcon />
                </View>
                <View style={{alignItems: 'center'}}>
                  <Text style={{fontSize: 18, color: '#000000'}}>
                    No data available
                  </Text>
                </View>
              </View>
            </CardLayout>
          </View>
          <View>
            <Text style={{fontSize: 18, color: '#000'}}>
              Additional informations
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Pressable style={{width: '45%'}}>
              <CardLayout>
                <View style={{alignItems: 'center', paddingVertical: 24}}>
                  <PigIcon />
                  <Text style={{marginTop: 8, fontSize: 14, color: '#005257'}}>
                    Savings
                  </Text>
                </View>
              </CardLayout>
            </Pressable>
            <Pressable style={{width: '45%'}}>
              <CardLayout>
                <View style={{alignItems: 'center', paddingVertical: 24}}>
                  <ReminderIcon />
                  <Text style={{marginTop: 8, fontSize: 14, color: '#005257'}}>
                    Reminders
                  </Text>
                </View>
              </CardLayout>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </BackGround>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  textColor: {
    color: '#ffffffff',
  },
  headerText: {
    fontSize: 32,
    marginBottom: 20,
  },
  calendarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  canlenderStyle: {
    padding: 7,
    borderRadius: 100,
    borderColor: '#FFFFFF',
    borderWidth: 4,
    backgroundColor: '#08979D',
  },
  monthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  expenseContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  expenseWapper: {flexDirection: 'row', justifyContent: 'space-between'},
  expenseText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#4D4D4D',
    marginBottom: 5,
  },
  moneyText: {fontSize: 14, fontWeight: '400'},
  moneySpend: {
    borderLeftColor: '#4D4D4D60',
    borderRightColor: '#4D4D4D60',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    paddingHorizontal: 30,
  },
});
