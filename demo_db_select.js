var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs2340_hustond',
    password: '6459',
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});