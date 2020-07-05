import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherCondition = {
  Thunderstorm: {
    iconName: 'ios-thunderstorm',
    color: ['#ffd89b', '#19547b']
  },
  Drizzle: {
    iconName: 'md-rainy',
    color: ['#00F260', '#0575E6']
  },
  Rain:{
    iconName: 'ios-rainy',
    color: ['#00b09b', '#96c93d']
  },
  Snow:{
    iconName: 'ios-snow',
    color: ['#E0EAFC', '#CFDEF3']
  },
  Mist:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Smoke:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Haze:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Dust:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Fog:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Sand:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Ash:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Squall:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Tornado:{
    iconName: 'ios-cloud-outline',
    color: ['#bdc3c7', '#2c3e50']
  },
  Clear:{
    iconName: 'ios-sunny',
    color: ['#fceabb', '#f8b500']
  },
  Clouds:{
    iconName: 'ios-cloud',
    color: ['#bdc3c7', '#2c3e50']
  },
};

export default function Weather({temp, condition}) {


  console.log(condition,'condition')
  return(
    <>
      <LinearGradient
        colors={weatherCondition[condition[0].main].color}
        style={{flex:1, padding: 15, alignItems: 'center' }}>
        <View style={styles.container}>
          <Ionicons name={weatherCondition[condition[0].main].iconName} size={50} color="white" />
          <Text style={styles.text}>{condition[0].description}</Text>
          <Text style={styles.text}>{temp}℃</Text>
        </View>
      </LinearGradient>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20
  }
});
