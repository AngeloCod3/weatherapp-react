import React, {useState} from 'react';
import style from './WeatherForm.module.css';

const WeatherForm = ({onChangeCity}) => {
    const [city,setCity] = useState('');

    function onChange (e) {
        const value = e.target.value;
        
        if (value !== '') {
            setCity(value);
        }
    }

    function handleSubmit (e){
        e.preventDefault();

        onChangeCity(city);
    }
  return (
    <div className={style.formContainer}>
        <h1>Quiero saber el clima de:</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={onChange} placeholder='Berlin'/>
        </form>
        
    </div>
  )
}

export default WeatherForm;