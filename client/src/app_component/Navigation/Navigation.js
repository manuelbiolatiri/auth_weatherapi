import React from 'react';
import {Link} from 'react-router-dom';

const Navigation = () =>{
  if (localStorage.jwt !== undefined) {
  return (
        <nav style={{display: 'flex', justifyContent: 'center'}}>
          <Link to="/">
          <p  className='f3 white pa3 pointer'>WEATHERBYMANUEL</p>
          </Link>
          <Link to="/profile">
          <p  className="f3 dim white underline pa3 pointer">Profile</p>
          </Link>
        </nav>
        )
  } else { 
    return (
      <nav style={{display: 'flex', justifyContent: 'center'}}>
          <Link to="/">
          <p  className='f3 white pa3 pointer'>WEATHERBYMANUEL</p>
          </Link>
          <Link to="/sign_in">
          <p  className="f3 dim white underline pa3 pointer">Sign in</p>
          </Link>
        </nav>
    )
  }   
}

export default Navigation;
