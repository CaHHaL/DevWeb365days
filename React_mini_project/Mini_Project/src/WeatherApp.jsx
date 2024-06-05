import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox"
import { useState } from "react";

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo]=useState({
       
            city:"Delhi",
            feelsLike:43.47,
            humidity:16,
            temp:43.95,
            tempMax:44.05,
            tempMin:43.95,
            weather:"haze",
       
    });
    let updateInfo=(newinfo)=>{
        setWeatherInfo(newinfo);
    }
    return(
        <>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </>
    );

}