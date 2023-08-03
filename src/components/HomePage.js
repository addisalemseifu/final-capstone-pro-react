import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import Navigation from './Navigation';
import Item from './Item';

export default function HomePage() {
  const { location } = useSelector((store) => store.location);
  console.log(location)
  return (
    <div className="home-container">
      <Navigation />
      <div className="top-box">
        <div className="loc">
          <h3>{location.location.name}</h3>
          <h3>{location.location.country}</h3>
        </div>
        <div className="lat">
          <div className="temp">
            <img src={location.current.condition.icon} alt="" />
            <h2>
              {location.current.temp_c}
              °C
            </h2>
          </div>
          <div className="charactor">
            <div className="stat-cont">
              <h4>humidity</h4>
              <div className="humidity">
                <FontAwesomeIcon icon={faWater} size="3x" />
                <h3>
                  {location.current.humidity}
                  %
                </h3>
              </div>
            </div>
            <div className="stat-cont">
              <h4>wind-speed</h4>
              <div className="speed">
                <FontAwesomeIcon icon={faWind} size="3x" />
                <h3>
                  {location.current.wind_mph}
                  km/h
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="stat">
        <h4>Comming 3 days Forcast</h4>
      </div>
      <div className="stat-numerics ">
        {
            location.forecast.forecastday
              .map((item, index) => (
                <Item
                  data-testid={`forcast-item-${index}`}
                  date={item.date}
                  sunrise={item.astro.sunrise}
                  sunset={item.astro.sunset}
                  averagetemp={item.day.avgtemp_c}
                  averagewindspeed={item.day.avgvis_km}
                  averagehumidity={item.day.avghumidity}
                  condition={item.day.condition.text}
                  icon={item.day.condition.icon}
                  id={item.date}
                  key={item.date}
                />
              ))
        }
      </div>
    </div>
  );
}
