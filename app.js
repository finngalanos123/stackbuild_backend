const express = require('express');
const app = express();

const port = process.env.PORT || 3000;
const server = require('http').createServer(app);
const cors = require('cors');


// Cors
app.use(cors(require('./config/cors')));

const bodyParser = require('body-parser');

// Start server on pre-defined port
server.listen(port, () => {
    console.log('server is listening on port ' + port)
});

// Dotenv used to read process.env
require('dotenv').config();


// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const path = require('path');

let dist = path.join(__dirname, '/dist');
if (process.env.NODE_ENV === 'production') {
    dist = path.join(__dirname, '/dist')
}
// Separating Angular routes
app.get('*', (req, res) => {
    console.log('fix routes')
    fixRoutes(req, res);
});


fixRoutes = (req, res) => {
    console.log(dist)
    app.use(express.static(dist));
    app.get('*', (req, res, next) => {
        if (!req.url.includes('phpmyadmin')) {
            res.sendFile(dist + 'index.html');
        }

        next();

    });
};


// Passport.js config
// const passport = require('passport');
// require('./config/google-passport-strategy')(passport);
// require('./config/facebook-passport-strategy')(passport);
// app.use(passport.initialize({}));

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/auth'));




