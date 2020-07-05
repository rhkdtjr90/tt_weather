import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native'
import * as Location from 'expo-location';
import axios from 'axios';
import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = "c9b29e274a18611a3782e7967d810ee1";

export default function App() {
  const [state, setState] = useState({
    isLoading: true
  });

  const getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();
      const {coords : {latitude, longitude}} = await Location.getCurrentPositionAsync();
      const {data:{
        main: {temp},
        weather
      }} = await getWeather(latitude,longitude);
      setState({
        temp: Math.floor(temp), condition: weather, isLoading: false
      });

    }catch(e){
      Alert.alert('Sorry', '권한이 없어 데이터를 가져올 수 없습니다.');
      console.log(e);
    }
  };

  const getWeather = async (latitude, longitude) =>{
    console.log(latitude,longitude)
    return await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=kr`)
      .catch();
    console.log(data,'data')
  };

  useEffect(()=>{
    getLocation()
  }, []);

  if(state.isLoading) return <Loading/>;

  return (
    <>
      <Weather temp={state.temp} condition={state.condition}/>
    </>
  );
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
