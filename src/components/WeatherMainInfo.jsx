import React from 'react';
import style from './WeatherMainInfo.module.css';

const WeatherMainInfo = ({weather}) => {
  return (
    <div>
        <div className={style.mainCountry}>
            <h2>{weather?.location.name}</h2> <br></br>

            <p>{weather?.location.country}</p>
            
        </div>
            <div className={style.mainInfo}>

             <img src={`http:${weather?.current.condition.icon}`} width='128px' alt={weather?.current.condition.text}/>
              <div className={style.textInfo}>
                <h2>{weather?.current.condition.text}</h2>
                <h2 className={style.tempText}>{weather?.current.temp_c}°C</h2>
                <h2>{weather?.location.localtime}</h2>
              </div>
            </div>

            

            <div className={style.mainMapInfo}>
              <iframe 
              title='Mapa'
              src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d532021.8030674055!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sve!4v1670253035164!5m2!1ses-419!2sve`} 
              width="600" height="450" style={{border: 0}}  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
    </div>
  )
}

export default WeatherMainInfo