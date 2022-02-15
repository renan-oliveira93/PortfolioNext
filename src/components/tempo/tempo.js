import React, {Fragment, useEffect, useState} from "react";
import axios from "axios";
import styles from '../../../styles/Home.module.css';

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
                  
                <table className={styles.tempo_container, styles.container}>
                  <thead>
                       <h3 className={styles.tempo_container_box}>Clima na sua Região 
                       ({Weather['weather'][0]['description']})</h3>
                  </thead>
                 
                  <tr className={styles.tempo_container_box}>
                      <td>Temperatura atual:</td>
                      <td>{Weather['main']['temp']}°</td>
                  </tr>

                  <tr className={styles.tempo_container_box}>
                      <td>Temperatura máxima:</td>
                      <td>{Weather['main']['temp_max']}°</td>                      
                                          
                  </tr>

                  <tr className={styles.tempo_container_box}>
                      <td>Temperatura minima:</td>
                      <td>{Weather['main']['temp_min']}°</td>                                           
                  </tr>

                  <tr className={styles.tempo_container_box}>
                      <td>Pressão:</td>
                      <td>{Weather['main']['pressure']} hpa</td>                                          
                  </tr>

                  <tr className={styles.tempo_container_box}>
                      <td>Humidade:</td>
                      <td>{Weather['main']['humidity']}%</td>                  
                  </tr>

                </table>
                
              </Fragment>
            );
            
            }
    }                  

export default  Tempo;