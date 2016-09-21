var express = require('express'),

    path    = require('path'),

    bp      = require('body-parser'),

	app     = express();

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));
app.use( express.static( path.join( __dirname, '/client' )));
app.use( express.static( path.join( __dirname, '/node_modules' )));


app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

app.listen(8000, function(){
	console.log('listening on port 8000');
})