import React from "react";
import "./App.css";

import Register from "./app_component/Register/Register";
import Signin from "./app_component/Signin/Signin";
import Profile from "./app_component/Profile";
import Home from "./app_component/Home";
import ProtectedRoute from "./app_component/protected_routes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 const FourZeroFour =()=>{
    return (
      <div>
      <h3>404 - Not found</h3>
        <a href="http://localhost:3000/" 
        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        >Go to home</a>
      </div>
    );
  };

class App extends React.Component {
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

 
  
  render() {
    return (
      <Router>
      <div className="App">
      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/sign_up" component={Register} />
          <Route path="/sign_in" component={Signin} />
          <ProtectedRoute path="/profile" component={Profile}/>
          <Route component={FourZeroFour} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

