import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";

    function Tempo (){
    const [Location, setLocation] = useState (false);
    const [Weather, setWeather] = useState(false);

    let getWeather = async (lat, long) => {
        let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
          params: {
            lat: lat,
            lon: long,
            appid: "a9a5fc66b7e9e8f00c75f8a94262f17f",
            lang: 'pt',
            units: 'metric'
          }
        });
        setWeather(res.data);
      }

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition((position)=> {
          getWeather(position.coords.latitude, position.coords.longitude);
          setLocation(true)
        })
      }, [])
            if(Location === false){
            return (
              <Fragment>
                Você precisa habilitar a localização no browser ...
              </Fragment>
            )
        } else if (Weather === false) {
            return (
              <Fragment>
                Carregando o clima...
              </Fragment>
            )
        } else{
            return (
                <Fragment>
                <div className="tempo-container container">
                <h3 className="tempo-container-box">Clima na sua Região  ({Weather['weather'][0]['description']})</h3>
                <hr/>
                <ul>
                  <li className="tempo-container-box">Temperatura atual: ...................{Weather['main']['temp']}°</li>
                  <li className="tempo-container-box">Temperatura máxima: .............. {Weather['main']['temp_max']}°</li>
                  <li className="tempo-container-box">Temperatura minima: ............... {Weather['main']['temp_min']}°</li>
                  <li className="tempo-container-box">Pressão: .............................. {Weather['main']['pressure']} hpa</li>
                  <li className="tempo-container-box">Humidade: .................................. {Weather['main']['humidity']}%</li>
                </ul>
                </div>
                
              </Fragment>
            );
            
            }
    }                  

export default  Tempo;