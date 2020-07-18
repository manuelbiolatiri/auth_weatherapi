const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const cookieParser = require('cookie-parser')
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./models/database');

const port = process.env.PORT || 3006;

// routers
const userRouter = require('./routes/register.route');

// instantiate express
const app = express();

app.use(require("body-parser").json())
// configure cors
app.use(cors());
app.use(cookieParser('keyboard cat'));
app.use(session({
  secret: 'keyboard cat',
  cookie: { maxAge: 60000 }
}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
  
    next();
})

app.use(express.static(path.join(__dirname, 'client/build')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// app router
app.use('/api/v1/', userRouter);

// welcome route
app.get('/', (req, res) => {
    res.status(200).json(({
        status: 'success',
        message: 'welcome to the team work api'
    }))
})

// wronge routes
app.use('*', (req, res) => {
    res.status(404).json({
        status: 'error',
        error: 'wrong route'
    })
});

app.listen(port,() => {
    console.log(`app is running on ${port}`)
});

module.exports = app;