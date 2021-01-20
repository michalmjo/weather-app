import React from "react";
import "./Result.css";
import thunderstorm from "../img/thunderstorm.gif";
import drizzle from "../img/drizzle.gif";
import rain from "../img/rain.gif";
import ice from "../img/ice.png";
import fog from "../img/fog.png";
import sun from "../img/sun.gif";
import cloud from "../img/cloud.png";
import unknow from "../img/unknow.png";

const Result = (props) => {
  const {
    date,
    err,
    city,
    sunrise,
    sunset,
    pressure,
    wind,
    picId,
    temp,
  } = props.weather;

  let content = null;
  let picture = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString();
    if (picId >= 200 && picId < 300) {
      picture = thunderstorm;
    } else if (picId >= 300 && picId < 400) {
      picture = drizzle;
    } else if (picId >= 500 && picId < 600) {
      picture = rain;
    } else if (picId >= 600 && picId < 700) {
      picture = ice;
    } else if (picId >= 700 && picId < 800) {
      picture = fog;
    } else if (picId === 800) {
      picture = sun;
    } else if (picId >= 800 && picId < 900) {
      picture = cloud;
    } else {
      picture = unknow;
    }

    content = (
      <>
        <div className="wrapp">
          <span>Wyniki wyszukiwania dla {city}</span>
          <span>Dzisiejsza data {date}</span>
          <span>Aktualna temperatura {temp}</span>
          <div className="pic">
            <span>Pogoda na zewnątrz</span>
            <img src={`${picture}`} alt="picWeather" />
          </div>
          <span>Wschod słonca o godzinie {sunriseTime}</span>
          <span>Zachód słonca o godzinie {sunsetTime}</span>
          <span>Prędkość wiatru {wind} m/s</span>
          <span>Ćisnienie {pressure} hPa</span>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="result">{err ? `Nie mamy w bazie ${city}` : content}</div>
    </>
  );
};

export default Result;
