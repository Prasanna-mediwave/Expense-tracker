import {Pressable, ScrollView, Text, View} from 'react-native';
import React from 'react';
import BackGround from '../components/BackGround';
import BackArrow from '../assets/icons/BackArrow';

const AddExpenses = () => {
  return (
    <BackGround>
      <ScrollView>
        <View
          style={{
            paddingTop: 36,
            paddingHorizontal: 24,
            marginBottom: 150,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 42,
            }}>
            <Pressable style={{width: '10%'}}>
              <BackArrow />
            </Pressable>
            <Text
              style={{
                width: '90%',
                textAlign: 'center',
                fontSize: 24,
                color: '#ffffff',
              }}>
              Add Expenses
            </Text>
          </View>
        </View>
      </ScrollView>
    </BackGround>
  );
};

export default AddExpenses;

// const styles = StyleSheet.create({});
