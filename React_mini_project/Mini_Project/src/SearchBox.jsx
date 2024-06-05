import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import "./SearchBox.css"
import { useState } from 'react';

export default function Search({ updateInfo}){
    let [city,setCity]=useState("");
    let [err,setErr]=useState(false);
    let API_URL="https://api.openweathermap.org/data/2.5/weather";
    let API_KEY="43be09fdf93b282caf9f0e455e0db89c";
    let req=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43be09fdf93b282caf9f0e455e0db89c&units=metric`;
    let getWeatherInfo=async ()=>{
    //    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
    try{
       let response = await fetch(req);
       let responseJson =await response.json();
       console.log(responseJson);
       let result={
        city:city,
        temp:responseJson.main.temp,
        tempMin:responseJson.main.temp_min,
        tempMax:responseJson.main.temp_max,
        humidity:responseJson.main.humidity,
        feelsLike:responseJson.main.feels_like,
        weather:responseJson.weather[0].description,
        
       }
       console.log(result);
       return result;
    }catch(err){
        throw err;
    }
    };
   
    let handleChange=(event)=>{
        setCity(event.target.value);
    };
    let handleSubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo();
        updateInfo(newinfo);
        }catch(err){
            setErr(true);
        }
    }

    return(
    

        <div>
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
            <br /> <br />
            <Button variant="contained" endIcon={<SendIcon />} type="submit" >
        Search
      </Button>   
      {err && <p style={{color:"red",fontWeight:"bold", fontSize:"25px"}}>No such place exists!</p>}  
            </form>
            
        </div>
    )
}