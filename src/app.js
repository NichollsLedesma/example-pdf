const express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    route = require('./routes'),
    app = express();

// config
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use('/', express.static(__dirname + '/../public'));
app.set('view engine', 'ejs');

// middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', route);

app.listen(app.get('port'), ()=>{
   console.log('Listenning to port ' + app.get('port'));
});