import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css'
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1561470508-fd4df1ed90b2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
  const HOT_URL="https://media.istockphoto.com/id/2148221665/photo/summer-sun-and-a-thermometer.webp?b=1&s=170667a&w=0&k=20&c=lCUVSRXaGDuLwiu6j1a95TWh66-p3wu-1eDtkkDmJTg=";
  const COLD_URL="https://media.istockphoto.com/id/960213848/photo/its-cold-out-here-i-have-to-cover-up.webp?b=1&s=170667a&w=0&k=20&c=ZJBN4DFd40K7HhFgbrTpAn23wJo41blz3RaONtvwm3I=";
  const RAIN_URL="https://media.istockphoto.com/id/1181608893/photo/beautiful-umbrella-having-polka-dots-on-it-is-lying-on-a-empty-road-in-rainy-season-of.jpg?s=612x612&w=0&k=20&c=cQdv6vBCmJ5bwqQW0YRk-txfVi4rxf-dMhtu-Ym24uo=";


    
    return(
        <div className="InfoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={
           info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL



        }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>

    <p>Temperature={info.temp}&deg;</p>        
    <p>Humidity={info.humidity}&deg;</p> 
    <p>Min Temp={info.tempMin}</p>
    <p>Max Temp={info.tempMax}</p>      
    <p>The Weather can be described as <i> {info.weather}</i> feels like {info.feelslike}&deg;C</p>
    </Typography>
      </CardContent>
     
    </Card>
        </div>
        </div>
    )
}