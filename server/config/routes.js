module.exports = function(app){
	app.get('/', function(req, res){
		res.render('index')
	})
	app.get('/warmth', function(req, res){
		res.render('warmth')
	})
}