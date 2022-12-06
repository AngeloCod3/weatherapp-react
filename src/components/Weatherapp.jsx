import React from 'react'
import { useState,useEffect } from 'react'
import WeatherForm from './WeatherForm';
import WeatherMainInfo from './WeatherMainInfo';
import style from './Weatherapp.module.css';
import Loader from './Loader';

function Weatherapp() {
  const [weather,setWeather] = useState(null);
  const API_KEY = '9928887bb6004851a0e184347220504';

    useEffect(() => {
      loadInfo();
    },[])

    useEffect(() => {
      document.title = `Clima de ${weather?.location.name}`
    },[weather])

  async function loadInfo (city = 'berlin') {
    try {
      const request = await fetch (
        `http://api.weatherapi.com/v1/current.json?aqi=no&key=${API_KEY}&q=${city}&lang=es`);
        const json = await request.json();
        setWeather(json)
        console.log(json)
      
      } catch (error) {
      console.log(error);
    }
  }

  function handleChangeCity(city) {
    setWeather(null);
    loadInfo(city);
  }

  return (

    <div className={style.weatherContainer}>
      
        <WeatherForm onChangeCity={handleChangeCity}/>
        {weather ? <WeatherMainInfo weather={weather}/> : <Loader />}
        
    </div>
  )
}

export default Weatherapp