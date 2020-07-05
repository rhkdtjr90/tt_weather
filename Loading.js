import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

export default function Loading() {

  return(
    <>
      <View style={styles.container}>
        <Text style={styles.text}>안녕 시리야!{"\n"}
          오늘 날씨를 가져오고있어.</Text>
      </View>
    </>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: '#FFE58C'
  },
  text: {
    color: '#2c2c2c',
    fontSize: 20
  }
});
