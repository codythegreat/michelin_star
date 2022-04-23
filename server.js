const express = require('express');
const { engine } = require('express-handlebars');
const port = process.env.PORT || 8080;
const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');

const mysql = require('mysql');
var pool = mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : process.env.MYSQLPW,
    database : 'michelin'
});
 

// Search SP call
let sql = `CALL sp_get_search_result(?)`;

// use static files, allows for css/javascript links
app.use(express.static('public'));

// index page - entry point
app.get('/', function(req, res) {
    res.render('index');
});

// search page
app.get('/search', (req, res) => {
    const query = req.query.query;
    pool.query(sql, query, (error, results, fields) => {
        if (error) {
            return console.log(error.message);
        }
        res.render('search', {
            query: query,
            results: results[0]
        });
    });
});


app.listen(port);
console.log('Server is initialized and listening on port ' + port);
