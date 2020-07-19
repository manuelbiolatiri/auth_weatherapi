import React from "react";
import jwtDecode from "jwt-decode";
import {Link, Redirect} from 'react-router-dom';
import {  Modal, ModalHeader, ModalFooter } from 'reactstrap';
import Weather from "./Weather";
import Form from "./Form";
import Clock from "./Clock";

const API_KEY = "64aaaf482d8112f1fc372e7553408f25";

class Profile extends React.Component {
  state = {
    username: '',
    kelvinTemp: undefined,
    tempMin: undefined,
    tempMax: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    pressure: undefined,
    displayUnits: "F",
    error: false,
    icon: undefined,
    redirect: false,
    modal: false,
    isOpen: false,
    fade: false
  };

  toggle = () => {
    this.setState({modal:true,
      fade: this.state.fade})
  }

  componentDidMount() {

    let jwt = window.localStorage.getItem("jwt");
    let result = jwtDecode(jwt);
    this.setState({username:result.username})
    console.log(`The result is`, result);
    console.log(`the current dashboard state is`, window.localStorage);

    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  toggleDisplayUnits() {
    this.state.displayUnits === "C"
      ? this.setState({
          displayUnits: "C",
        })
      : this.setState({
          displayUnits: "F",
        });
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
    );

    const data = await api_call.json();
    console.log(data)
    try {
      if (city && country) {
        this.setState({
          kelvinTemp: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          pressure: data.main.pressure,
          unit: data.main.temp,
          error: false,
          icon: data.weather[0].icon,
        });
      } else {
        this.setState({
          kelvinTemp: undefined,
          tempMin: undefined,
          tempMax: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          pressure: undefined,
          unit: undefined,
          icon: undefined,
          error: "Please Enter Correct Values",
        });
      }
    } catch (error) {
      alert("Sorry, try again!");
    }
  };

  handleLogout = (event) => {
    event.preventDefault();
    delete localStorage.jwt
    this.setState({redirect:true})
  }

  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/sign_in' />
    }
    return (
      <div>
      <nav style={{display: 'flex', justifyContent: 'center'}}>
          <Link to="/">
          <p  className='f3 fw4 hover-white no-underline white-70 dn dib-ns pa3'>WEATHERBYMANUEL</p>
          </Link>
           <Link to="/">
          <p  className='f3 dim white underline pa3 pointer'>Home</p>
          </Link>
          
          <p  className='f3 dim white underline pa3 pointer' onClick={this.toggle}>Sign Out</p>
          
        </nav>
        <h4>Hi!, {this.jsUcfirst(this.state.username)}</h4>
        <h1>Find Out what the weather is like in different Cities.</h1>
        <Clock />

        <Form getWeather={this.getWeather} />
        {this.state.city &&
        <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
            <Weather
              kelvinTemp={this.state.kelvinTemp}
              tempMin={this.state.tempMin}
              tempMax={this.state.tempMax}
              city={this.state.city}
              country={this.state.country}
              humidity={this.state.humidity}
              description={this.state.description}
              pressure={this.state.pressure}
              displayUnits={this.state.displayUnits}
              clickHandler={this.toggleDisplayUnits.bind(this)}
              error={this.state.error}
              icon={this.state.icon}
            />
        </main>
        </article>
        }
        <Modal isOpen={this.state.modal} toggle={this.state.toggle} fade={this.state.fade}>
        <ModalHeader toggle={this.state.toggle}>Are You Sure?</ModalHeader>
        <ModalFooter>
        <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={this.handleLogout}>Yes</button>
          <button className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
          onClick={this.toggle}>No</button>
        </ModalFooter>
      </Modal>
      </div>
    );
  }
}

export default Profile;
