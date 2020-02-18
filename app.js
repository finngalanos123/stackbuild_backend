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





// Passport.js config
// const passport = require('passport');
// require('./config/google-passport-strategy')(passport);
// require('./config/facebook-passport-strategy')(passport);
// app.use(passport.initialize({}));

// Routes
// app.use('/auth', require('./routes/auth'));
app.use('/api/user', require('./routes/auth'));


const path = require('path');

let dist = path.join(__dirname, '/dist/');
console.log(dist)
if (process.env.NODE_ENV === 'production') {
    dist = path.join(__dirname, '/dist/')
}
// Separating Angular routes
app.get('*', (req, res, next) => {
    console.log('fix routes')
    fixRoutes(req, res, next);
});


fixRoutes = (req, res, next) => {
    console.log(dist)
    app.use(express.static(dist));

    console.log(req.url)
    console.log(!req.url.includes('phpmyadmin'))
    if (!req.url.includes('phpmyadmin')) {
        console.log('includes')
        res.sendFile(dist + 'index.html');
    }

    next();
};



