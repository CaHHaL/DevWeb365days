import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LightModeIcon from '@mui/icons-material/LightMode';
import "./infoBox.css";

export default function InfoBox({info}){
    const IMAGEURL="https://plus.unsplash.com/premium_photo-1666248657238-a315c5f63cc2?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const HOTURL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLDURL="https://plus.unsplash.com/premium_photo-1670615266206-fde7f0f73151?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAINURL="https://images.unsplash.com/photo-1580061022778-70ee6981bbce?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return(
        <div className="InfoBox">
            <h2>WeatherInfo-{info.weather}</h2>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? RAINURL : info.temp>15? HOTURL : COLDURL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80? <ThunderstormIcon/> : info.temp>15? <LightModeIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" >
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Min Temp = {info.tempMin}</p>
          <p>Max Temp = {info.tempMax}</p>
          <p>The weather can be describes as <i>{info.weather}</i> and feels like <i>{info.feelsLike}&deg;C</i></p>
        </Typography>
      </CardContent>
    </Card>
    </div>
        </div>
    );
}