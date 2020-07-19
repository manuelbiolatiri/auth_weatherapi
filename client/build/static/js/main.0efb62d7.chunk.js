(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{37:function(e,t,a){},42:function(e,t,a){e.exports=a(73)},47:function(e,t,a){},48:function(e,t,a){},58:function(e,t,a){},66:function(e,t,a){},70:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(18),i=a.n(r),o=(a(47),a(9)),l=a(10),c=a(12),m=a(11),u=(a(48),a(22)),p=a(19),d=a(6),h=a(74),f=function(){return void 0!==localStorage.jwt?s.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(d.b,{to:"/"},s.a.createElement("p",{className:"f3 white pa3 pointer"},"WEATHERBYMANUEL")),s.a.createElement(d.b,{to:"/profile"},s.a.createElement("p",{className:"f3 dim white underline pa3 pointer"},"Profile"))):s.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(d.b,{to:"/"},s.a.createElement("p",{className:"f3 white pa3 pointer"},"WEATHERBYMANUEL")),s.a.createElement(d.b,{to:"/sign_in"},s.a.createElement("p",{className:"f3 dim white underline pa3 pointer"},"Sign in")))},g=a(17),v=a(20),b=a.n(v);a(58);function E(){var e=Object(p.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return E=function(){return e},e}function w(e){return e.valid?null:s.a.createElement("div",{className:"error-msg"},e.message)}var y=Object(g.css)(E()),N=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",usernameValid:!1,email:"",emailValid:!1,password:"",passwordValid:!1,passwordConfirm:"",passwordConfirmValid:!1,formValid:!1,errorMsg:{},errorMessage:"",successMessage:"",visible:!0,loading:!1},e.hideLoader=function(){e.setState({loading:!1})},e.showLoader=function(){e.setState({loading:!0})},e.validateForm=function(){var t=e.state,a=t.usernameValid,n=t.emailValid,s=t.passwordValid,r=t.passwordConfirmValid;e.setState({formValid:a&&n&&s&&r})},e.updateUsername=function(t){e.setState({username:t.split(" ").join("")},e.validateUsername)},e.validateUsername=function(){var t=e.state.username,a=!0,n=Object(u.a)({},e.state.errorMsg);t.length<3&&(a=!1,n.username="Must be at least 3 characters long"),e.setState({usernameValid:a,errorMsg:n},e.validateForm)},e.updateEmail=function(t){e.setState({email:t.split(" ").join("")},e.validateEmail)},e.validateEmail=function(){var t=e.state.email,a=!0,n=Object(u.a)({},e.state.errorMsg);/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)||(a=!1,n.email="Invalid email format"),e.setState({emailValid:a,errorMsg:n},e.validateForm)},e.updatePassword=function(t){e.setState({password:t.split(" ").join("")},e.validatePassword)},e.validatePassword=function(){var t=e.state.password,a=!0,n=Object(u.a)({},e.state.errorMsg);t.length<6?(a=!1,n.password="Password must be at least 6 characters long"):/\d/.test(t)?/[!@#$%^&*]/.test(t)||(a=!1,n.password="Password must contain special character: !@#$%^&*"):(a=!1,n.password="Password must contain a digit"),e.setState({passwordValid:a,errorMsg:n},e.validateForm)},e.updatePasswordConfirm=function(t){e.setState({passwordConfirm:t.split(" ").join("")},e.validatePasswordConfirm)},e.validatePasswordConfirm=function(){var t=e.state,a=t.passwordConfirm,n=t.password,s=!0,r=Object(u.a)({},e.state.errorMsg);n!==a&&(s=!1,r.passwordConfirm="Passwords do not match"),e.setState({passwordConfirmValid:s,errorMsg:r},e.validateForm)},e.onSubmitRegister=function(){e.showLoader();try{fetch("https://weatherbymanuel.herokuapp.com/api/v1/auth/create-user",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:e.state.username,email:e.state.email,password:e.state.password})}).then(function(t){400===t.status?(e.setState({errorMessage:"User already exist"}),e.hideLoader()):201===t.status&&(e.setState({successMessage:"User registered successfully"}),setTimeout(function(){e.hideLoader(),e.props.history.push("/sign_in")},1500))}).catch(function(e){console.log(e)})}catch(t){console.log(t)}},e.onDismiss=function(){e.setState({visible:!1})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(f,null),s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Register"),this.state.successMessage&&s.a.createElement(h.a,{color:"success",isOpen:this.state.visible,toggle:this.onDismiss},s.a.createElement("p",{className:"success-msg mb-0"}," ",this.state.successMessage," ")," "),this.state.errorMessage&&s.a.createElement(h.a,{color:"warning",isOpen:this.state.visible,toggle:this.onDismiss},s.a.createElement("p",{className:"error-msg mb-0"}," ",this.state.errorMessage," ")),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"username"},"Username"),s.a.createElement(w,{valid:this.state.usernameValid,message:this.state.errorMsg.username}),s.a.createElement("input",{type:"text",id:"username",name:"username",className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",value:this.state.username,onChange:function(t){return e.updateUsername(t.target.value)}})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email"},"Email"),s.a.createElement(w,{valid:this.state.emailValid,message:this.state.errorMsg.email}),s.a.createElement("input",{type:"email",id:"email",name:"email",className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",value:this.state.email,onChange:function(t){return e.updateEmail(t.target.value)}})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement(w,{valid:this.state.passwordValid,message:this.state.errorMsg.password}),s.a.createElement("input",{type:"password",id:"password",name:"password",className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",value:this.state.password,onChange:function(t){return e.updatePassword(t.target.value)}})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password-confirmation"},"Confirm Password"),s.a.createElement(w,{valid:this.state.passwordConfirmValid,message:this.state.errorMsg.passwordConfirm}),s.a.createElement("input",{type:"password",id:"password-confirmation",name:"password-confirmation",className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",value:this.state.passwordConfirm,onChange:function(t){return e.updatePasswordConfirm(t.target.value)}}))),s.a.createElement("div",{className:""},s.a.createElement("button",{disabled:!this.state.formValid,onClick:this.onSubmitRegister,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"},this.state.loading?s.a.createElement(b.a,{css:y,size:6,color:"#fff",loading:this.state.loading}):"Register"),s.a.createElement(d.b,{to:"/sign_in"},s.a.createElement("p",{className:"lh-copy mt3 f6 dim white db pointer"},"Have an account? Login!")))))))}}]),a}(s.a.Component);a(66);function k(){var e=Object(p.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return k=function(){return e},e}var C=Object(g.css)(k()),j=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).hideLoader=function(){n.setState({loading:!1})},n.showLoader=function(){n.setState({loading:!0})},n.onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){n.showLoader();try{fetch("https://weatherbymanuel.herokuapp.com/api/v1/auth/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.state.signInEmail,password:n.state.signInPassword})}).then(function(e){return e.json()}).then(function(e){console.log(e.data),"error"===e.status?(n.setState({errorMessage:e.error}),n.hideLoader()):"success"===e.status&&(localStorage.setItem("jwt",JSON.stringify(e.data.token)),n.setState({successMessage:e.message}),setTimeout(function(){n.hideLoader(),n.props.history.push("/profile")},2e3))})}catch(e){console.log(e)}},n.onDismiss=function(){n.setState({visible:!1})},n.state={signInEmail:"",signInPassword:"",errorMessage:"",successMessage:"",visible:!0,loading:!1},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(f,null),s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Login"),this.state.successMessage&&s.a.createElement(h.a,{color:"success",isOpen:this.state.visible,toggle:this.onDismiss},s.a.createElement("p",{className:"success-msg mb-0"}," ",this.state.successMessage," ")),this.state.errorMessage&&s.a.createElement(h.a,{color:"warning",isOpen:this.state.visible,toggle:this.onDismiss},s.a.createElement("p",{className:"error-msg mb-0"}," ",this.state.errorMessage," ")),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"username"},"Username"),s.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"username",id:"username",placeholder:"Email",onChange:this.onEmailChange})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",placeholder:"Password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("button",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"},this.state.loading?s.a.createElement(b.a,{css:C,size:7,color:"#fff"}):"Sign in")),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement(d.b,{to:"/sign_up"},s.a.createElement("p",{className:"f6 link dim black db pointer"},"Not registered yet? Create an account")))))))}}]),a}(s.a.Component),M=a(21),S=a.n(M),O=a(23),P=a(40),x=a.n(P),U=a(4),L=a(77),D=a(75),I=a(76),F=(a(36),a(37),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"handleClicked",value:function(){this.props.clickHandler()}},{key:"calculateTemp",value:function(e,t){return"C"===t?Math.floor(e-273):Math.floor(9*(e-273)/5+32)}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",null,s.a.createElement("h1",null,this.props.city&&this.props.country&&s.a.createElement("p",null,this.props.city,", ",this.props.country)),this.props.icon&&s.a.createElement("p",null,s.a.createElement("img",{src:"http://openweathermap.org/img/w/".concat(this.props.icon,".png"),alt:"wthr img",size:"40px"})),s.a.createElement("h1",null,this.props.kelvinTemp&&s.a.createElement("p",null,s.a.createElement("i",{className:"fas fa-thermometer-three-quarters"})," ",s.a.createElement("span",{onClick:this.handleClicked.bind(this)},this.calculateTemp(this.props.kelvinTemp,this.props.displayUnits),"\xb0",this.props.displayUnits))),s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h4",null,this.props.description&&s.a.createElement("p",null," ",s.a.createElement("i",{className:"fas fa-info"})," ",s.a.createElement("span",null,this.props.description))),s.a.createElement("h5",null,this.props.tempMin&&this.props.tempMax&&s.a.createElement("p",null," ",s.a.createElement("i",{className:"fas fa-sort"})," Min/Max:"," ",s.a.createElement("span",{onClick:this.handleClicked.bind(this)},this.calculateTemp(this.props.tempMin,this.props.displayUnits),"\xb0",this.props.displayUnits," |",this.calculateTemp(this.props.tempMax,this.props.displayUnits),"\xb0",this.props.displayUnits)))),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h5",null,this.props.humidity&&s.a.createElement("p",null," ",s.a.createElement("i",{className:"fas fa-water"})," Humidity:"," ",s.a.createElement("span",null,this.props.humidity,"%"))),s.a.createElement("h5",null,this.props.pressure&&s.a.createElement("p",null," ",s.a.createElement("i",{className:"fas fa-tachometer-alt"})," Pressure:"," ",s.a.createElement("span",null,this.props.pressure," hPa"))))),s.a.createElement("h4",null,this.props.error&&s.a.createElement("p",null," ",s.a.createElement("i",null)," ",s.a.createElement("span",null,this.props.error)))))}}]),a}(s.a.Component)),T=function(e){return s.a.createElement("div",{className:"container"},s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("form",{onSubmit:e.getWeather},s.a.createElement("div",{className:"row mb-5"},s.a.createElement("div",{className:"col-md-3 offset-md-2"},s.a.createElement("input",{type:"text",name:"city",className:"form-control",placeholder:"City"})),s.a.createElement("div",{className:"col-md-3"},s.a.createElement("input",{type:"text",name:"country",className:"form-control",placeholder:"Country"})),s.a.createElement("div",{className:"col-md-4 mt-md-0 mt-2 text-md-left"},s.a.createElement("button",{className:"btn btn-info"},"Show Weather"))))))},V=(a(70),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={date:new Date},n}return Object(l.a)(a,[{key:"getCurrentDate",value:function(){var e=new Date,t=e.getDate();return e.getMonth()+1+"-"+t+"-"+e.getFullYear()}},{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval(function(){return e.tick()},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){return s.a.createElement("div",{className:""},s.a.createElement("h5",null,"Your Local Time and Date"),s.a.createElement("i",{class:"far fa-clock"})," ",this.state.date.toLocaleTimeString(),s.a.createElement("br",null),s.a.createElement("i",{class:"far fa-calendar-alt"})," ",this.getCurrentDate(),".")}}]),a}(s.a.Component)),W="64aaaf482d8112f1fc372e7553408f25",A=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",kelvinTemp:void 0,tempMin:void 0,tempMax:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,pressure:void 0,displayUnits:"F",error:!1,icon:void 0,redirect:!1,modal:!1,isOpen:!1,fade:!1},e.toggle=function(){e.setState({modal:!0,fade:e.state.fade})},e.getWeather=function(){var t=Object(O.a)(S.a.mark(function t(a){var n,s,r,i;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=a.target.elements.city.value,s=a.target.elements.country.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(s,"&APPID=").concat(W));case 5:return r=t.sent,t.next=8,r.json();case 8:i=t.sent,console.log(i);try{n&&s?e.setState({kelvinTemp:i.main.temp,tempMin:i.main.temp_min,tempMax:i.main.temp_max,city:i.name,country:i.sys.country,humidity:i.main.humidity,description:i.weather[0].description,pressure:i.main.pressure,unit:i.main.temp,error:!1,icon:i.weather[0].icon}):e.setState({kelvinTemp:void 0,tempMin:void 0,tempMax:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,pressure:void 0,unit:void 0,icon:void 0,error:"Please Enter Correct Values"})}catch(o){alert("Sorry, try again!")}case 11:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),e.handleLogout=function(t){t.preventDefault(),delete localStorage.jwt,e.setState({redirect:!0})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=window.localStorage.getItem("jwt"),t=x()(e);this.setState({username:t.username}),console.log("The result is",t),console.log("the current dashboard state is",window.localStorage),navigator.geolocation.getCurrentPosition(function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude)})}},{key:"toggleDisplayUnits",value:function(){"C"===this.state.displayUnits?this.setState({displayUnits:"C"}):this.setState({displayUnits:"F"})}},{key:"jsUcfirst",value:function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},{key:"render",value:function(){return this.state.redirect?s.a.createElement(U.a,{to:"/sign_in"}):s.a.createElement("div",null,s.a.createElement("nav",{style:{display:"flex",justifyContent:"center"}},s.a.createElement(d.b,{to:"/"},s.a.createElement("p",{className:"f3 fw4 hover-white no-underline white-70 dn dib-ns pa3"},"WEATHERBYMANUEL")),s.a.createElement(d.b,{to:"/"},s.a.createElement("p",{className:"f3 dim white underline pa3 pointer"},"Home")),s.a.createElement(d.b,{to:"/explore"},s.a.createElement("p",{className:"f3 dim white underline pa3 pointer"},"Explore")),s.a.createElement("p",{className:"f3 dim white underline pa3 pointer",onClick:this.toggle},"Sign Out")),s.a.createElement("h4",null,"Hi!, ",this.jsUcfirst(this.state.username)),s.a.createElement("h1",null,"Find Out what the weather is like in different Cities."),s.a.createElement(V,null),s.a.createElement(T,{getWeather:this.getWeather}),this.state.city&&s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement(F,{kelvinTemp:this.state.kelvinTemp,tempMin:this.state.tempMin,tempMax:this.state.tempMax,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,pressure:this.state.pressure,displayUnits:this.state.displayUnits,clickHandler:this.toggleDisplayUnits.bind(this),error:this.state.error,icon:this.state.icon}))),s.a.createElement(L.a,{isOpen:this.state.modal,toggle:this.state.toggle,fade:this.state.fade},s.a.createElement(D.a,{toggle:this.state.toggle},"Are You Sure?"),s.a.createElement(I.a,null,s.a.createElement("button",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.handleLogout},"Yes"),s.a.createElement("button",{className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",onClick:this.toggle},"No"))))}}]),a}(s.a.Component),_=a(28),H=a.n(_);function R(){var e=Object(p.a)(["\n  display: block;\n  margin: 0 auto;\n  border-color: red;\n"]);return R=function(){return e},e}var Y="64aaaf482d8112f1fc372e7553408f25",J=Object(g.css)(R()),B=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={lat:void 0,lon:void 0,city:void 0,country:void 0,temperatureC:void 0,temperatureF:void 0,icon:void 0,description:void 0,sunrise:void 0,sunset:void 0,errorMessage:void 0,loading:!1},e.hideLoader=function(){e.setState({loading:!1})},e.showLoader=function(){e.setState({loading:!0})},e.getPosition=function(){return new Promise(function(e,t){navigator.geolocation.getCurrentPosition(e,t)})},e.getWeather=function(){var t=Object(O.a)(S.a.mark(function t(a,n){var s,r;return S.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(a,"&lon=").concat(n,"&APPID=").concat(Y));case 2:return s=t.sent,t.next=5,s.json();case 5:r=t.sent,console.log(r),e.setState({lat:a,lon:n,city:r.name,country:r.sys.country,description:r.weather[0].description,temperatureC:e.calCelsius(r.main.temp),temperatureF:e.calF(r.main.temp),icon:r.weather[0].icon,sunrise:H.a.unix(r.sys.sunrise).format("hh:mm a"),sunset:H.a.unix(r.sys.sunset).format("hh:mm a")});case 8:case"end":return t.stop()}},t)}));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(l.a)(a,[{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"calF",value:function(e){return Math.floor(9*(e-273)/5+32)}},{key:"componentDidMount",value:function(){var e=this;this.showLoader(),this.getPosition().then(function(t){e.getWeather(t.coords.latitude,t.coords.longitude),e.hideLoader()}).catch(function(e){return console.log(e.message)}),this.hideLoader(),this.timerID=setInterval(function(){return e.getWeather(e.state.lat,e.state.lon)},5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"render",value:function(){var e=this.state,t=e.city,a=e.country,n=e.temperatureC,r=e.temperatureF,i=e.icon,o=e.sunrise,l=e.sunset,c=e.description;return s.a.createElement("div",null,s.a.createElement(f,null),s.a.createElement(V,null),t?s.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},s.a.createElement("div",{className:"container text-light"},s.a.createElement("div",{className:"Card"},s.a.createElement("h1",{className:"text-white py-3"},t,", ",a),s.a.createElement("h1",{className:"py-2"},n," \xb0C ",s.a.createElement("span",{className:"slash"},"/")," ",r," \xb0F"),s.a.createElement("h5",{className:"py-4"},s.a.createElement("img",{className:"weather-icon",src:"http://openweathermap.org/img/w/".concat(i,".png"),alt:"weather icon"})),s.a.createElement("h4",{className:"py-3"},s.a.createElement("span",null,c)),s.a.createElement("h4",{className:"py-3"},s.a.createElement("span",null,"sunrise: ",o)),s.a.createElement("h4",{className:"py-3"},s.a.createElement("span",null,"sunset: ",l))))):s.a.createElement("div",{className:"mt-5"},s.a.createElement("div",null,s.a.createElement("h3",null,"Hey there, Just a second ",s.a.createElement("br",null),"We are fetching your location's weather")),s.a.createElement(b.a,{className:"mt-3",css:J,size:60,color:"#fff"})))}}]),a}(n.Component),z=a(41),$=function(e){var t=e.component,a=Object(z.a)(e,["component"]);return s.a.createElement(U.b,Object.assign({},a,{render:function(e){return void 0!==localStorage.jwt?s.a.createElement(t,e):s.a.createElement(U.a,{to:"/sign_in"})}}))},q=function(){return s.a.createElement("div",null,s.a.createElement("h3",null,"404 - Not found"),s.a.createElement("a",{href:"http://localhost:3000/",className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"},"Go to home"))},G=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"componentDidMount",value:function(){navigator.geolocation.getCurrentPosition(function(e){console.log("Latitude is :",e.coords.latitude),console.log("Longitude is :",e.coords.longitude)})}},{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"App"},s.a.createElement(U.d,null,s.a.createElement(U.b,{path:"/",exact:!0,component:B}),s.a.createElement(U.b,{path:"/sign_up",component:N}),s.a.createElement(U.b,{path:"/sign_in",component:j}),s.a.createElement($,{path:"/profile",component:A}),s.a.createElement(U.b,{component:q}))))}}]),a}(s.a.Component);a(72),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.0efb62d7.chunk.js.map