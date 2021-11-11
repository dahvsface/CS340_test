var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'classmysql.engr.oregonstate.edu',
    user: 'cs2340_hustond',
    password: '6459',
    database: "mydb"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});