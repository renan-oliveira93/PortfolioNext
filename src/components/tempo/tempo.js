import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import styles from '../../../styles/Home.module.css';

function Tempo() {
  const [Location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  let getWeather = async (lat, long) => {
    let res = await axios.get("http://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: process.env.NEXT_PUBLIC_API_KEY,
        lang: 'pt',
        units: 'metric'
      }
    });
    setWeather(res.data);
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true)
    })
  }, [])
  if (Location === false) {
    return (
      <Fragment>
        Você precisa habilitar a localização no browser ...
      </Fragment>
    )
  } else if (weather === false) {
    return (
      <Fragment>
        Carregando o clima...
      </Fragment>
    )
  } else {
    return (
      <Fragment>

        <table className={styles.container_tempo}>
          <thead>
            <tr><th className={styles.tempo_container_box}>Clima na sua Região
              ({weather['weather'][0]['description']})</th></tr>
          </thead>
          <tbody>
            <tr className={styles.tempo_container_box}>
              <td>Temperatura atual:</td>
              <td>{weather['main']['temp']}°</td>
            </tr>

            <tr className={styles.tempo_container_box}>
              <td>Temperatura máxima:</td>
              <td>{weather['main']['temp_max']}°</td>

            </tr>

            <tr className={styles.tempo_container_box}>
              <td>Temperatura minima:</td>
              <td>{weather['main']['temp_min']}°</td>
            </tr>

            <tr className={styles.tempo_container_box}>
              <td>Pressão:</td>
              <td>{weather['main']['pressure']} hpa</td>
            </tr>

            <tr className={styles.tempo_container_box}>
              <td>Humidade:</td>
              <td>{weather['main']['humidity']}%</td>
            </tr>

          </tbody>


        </table>

      </Fragment>
    );

  }
}

export default Tempo;