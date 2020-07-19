import React from 'react'
import {Link} from 'react-router-dom';
import {Alert} from 'reactstrap';
import Navigation from "../Navigation/Navigation";
import { css } from "@emotion/core";
import PulseLoader from "react-spinners/PulseLoader";
import './Signin.css';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      errorMessage: '',
      successMessage: '',
      visible: true,
      loading: false
    }
  }

  hideLoader = () => {
    this.setState({ loading: false });
  }

  showLoader = () => {
    this.setState({ loading: true });
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    this.showLoader();
    try {
    fetch('https://weatherbymanuel.herokuapp.com/api/v1/auth/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
    .then(response => response.json())
      .then((user) => {
        // console.log(user);
        console.log(user.data);
        if(user.status === 'error') {
        this.setState({errorMessage: user.error});
        this.hideLoader();
        } else if(user.status === 'success') {
        localStorage.setItem("jwt", JSON.stringify(user.data.token));
          this.setState({successMessage: user.message});
          setTimeout(() => {
            this.hideLoader();
            this.props.history.push(`/profile`);
          }, 2000)
        }
      })
  
  }
    catch (e) {
      console.log(e);
  };
  }

  onDismiss = () => {
    this.setState({visible:false})
  }

  render() {
    return (
      <div>
      <Navigation />
      <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f1 fw6 ph0 mh0">Login</legend>
              { this.state.successMessage &&
              <Alert color="success" isOpen={this.state.visible} toggle={this.onDismiss}>
              <p className="success-msg mb-0"> { this.state.successMessage } </p>
              </Alert>}
              { this.state.errorMessage &&
              <Alert color="warning" isOpen={this.state.visible} toggle={this.onDismiss}>
              <p className="error-msg mb-0"> { this.state.errorMessage } </p>
              </Alert> }
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="username">Username</label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Email"
                  onChange={this.onEmailChange}
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                />
              </div>
            </fieldset>
            <div className="">
              <button onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib">
                {this.state.loading ? <PulseLoader css={override} size={7}
          color={'#fff'}
        /> : `Sign in`}</button>
            </div>
            <div className="lh-copy mt3">
            <Link to="/sign_up">
          <p className="f6 link dim black db pointer">Not registered yet? Create an account</p>
          </Link>
              
            </div>
          </div>
        </main>
      </article>
      </div>
    );
  }
}

export default Signin;