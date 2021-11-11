var mysql = require('mysql');

var con = mysql.createConnection({
    host  : 'classmysql.engr.oregonstate.edu',
    user  : 'cs340_hustond',
    password: '6459',
    database: 'cs340_hustond'
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = " CREATE TABLE Players (" +
        "playerID int NOT NULL AUTO_INCREMENT, " +
        "email varchar(50) NOT NULL, " +
        "firstName varchar(50) NOT NULL,  " +
        "lastName varchar(50) NOT NULL, " +
        "gamerTag varchar(50) NOT NULL, " +
        "PRIMARY KEY (playerID), " +
        "UNIQUE (playerID)) ENGINE=InnoDB;";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});