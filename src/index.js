const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const morgan = require('morgan');
const sequelize = require('./database/db_connect.js');

// Configs
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.use('/',require('./routes/index'));

// Init server
app.listen(app.get('port'), async (error) => {
    
    (error) ? console.log(error) : console.log('Run on http://localhost:' + app.get('port'));

    sequelize.sync({ force: false }).then(() => {
        console.log("The connection with db is ok! :D");
    }).catch(error => {
        console.log('Error connecting with db :( ', error);
    });

});