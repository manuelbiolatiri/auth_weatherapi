import React, { Component } from 'react';
import "./weather.style.css";
import Clock from "./Clock";
import moment from 'moment';
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import  'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation/Navigation";

const WEATHER_API_KEY = "64aaaf482d8112f1fc372e7553408f25";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

 class Home extends Component {
  state = {
    lat: undefined,
    lon: undefined,
    city: undefined,
    country: undefined,
    temperatureC: undefined,
    temperatureF: undefined,
    icon: undefined,
    description: undefined,
    sunrise: undefined,
    sunset: undefined,
    errorMessage: undefined,
    loading: false
  }

  hideLoader = () => {
    this.setState({ loading: false });
  }

  showLoader = () => {
    this.setState({ loading: true });
  }

  getPosition = () => {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  }

  calCelsius(temp) {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }

  calF(temp) {
    let cell = Math.floor(((temp - 273) * 9) / 5 + 32)
    return cell;
  }

  getWeather = async (latitude, longitude) => {
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}`);
    const data = await api_call.json();
    console.log(data)
    this.setState({
      lat: latitude,
      lon: longitude,
      city: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      temperatureC: this.calCelsius(data.main.temp),
      temperatureF: this.calF(data.main.temp),
      icon: data.weather[0].icon,
      sunrise: moment.unix(data.sys.sunrise).format("hh:mm a"),
      sunset: moment.unix(data.sys.sunset).format("hh:mm a"),
    })
  }

  componentDidMount() {
    this.showLoader();
    this.getPosition()
    .then((position) => {
       this.getWeather(position.coords.latitude,     
       position.coords.longitude)
       this.hideLoader();
     })
     .catch((err) => console.log(err.message));
     this.hideLoader();
     this.timerID = setInterval(
      () => this.getWeather(this.state.lat, this.state.lon),
      5000
    );

 }

 componentWillUnmount() {
  clearInterval(this.timerID);
}

  render() {
    const { city, country, temperatureC, temperatureF, icon, sunrise, sunset, description} = this.state;
        
    return (
        <div>
        <Navigation/>
        <Clock />
        {!city ? 
          <div className="mt-5">
          <div><h3>Hey there, Just a second <br></br>We are fetching your location's weather</h3></div>
          <PulseLoader className="mt-3" css={override} size={60}
          color={"#fff"}
        />
        </div>
        :
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <div className="container text-light">
      <div className="Card">
      <h1 className="text-white py-3">{city}, {country}</h1>      
      <h1 className="py-2">{temperatureC} &deg;C <span className="slash">/</span> {temperatureF} &deg;F</h1>    
            <h5 className="py-4">
              <img className="weather-icon" src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather icon"/>
              </h5>
              <h4 className="py-3">
              <span>{description}</span>
            </h4>   
            <h4 className="py-3">
              <span>sunrise: {sunrise}</span>
            </h4>
            <h4 className="py-3">
              <span>sunset: {sunset}</span>
            </h4>
          </div>
        </div>
        </article>
      }
        </div>
      );
    } 
}

export default Home;
