/**
 * Created by Thomas on 11/16/15.
 */
var express = require("express");
var app = express();

var path = require("path");
var bodyParser = require("body-parser");

app.set("port", process.env.PORT || 5000);

var pg = require('pg');
var connectionString = process.env.DATABASE_URL|| 'postgres://localhost:5432/Address_Order_Display';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));



//GET Users
app.get('/users', function(req, res){
    var results = [];

    //SQL Query SELECT data from table
    pg.connect(connectionString, function (err, client) {
        var query = client.query("SELECT * FROM users ORDER BY id");   //<- make sure this connects to correct DB Table

        //stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        //after all data is returned, return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        //handle Errors
        if (err) {
            console.log(err);
        }

    });
});


//GET Users Adresses
app.get('/addresses', function(req, res){
    var results = [];

    //SQL Query SELECT data from table
    pg.connect(connectionString, function (err, client) {
        var query = client.query("SELECT * FROM addresses");   //<- make sure this connects to correct DB Table

        //stream results back one row at a time, push into results array
        query.on('row', function (row) {
            results.push(row);
        });

        //after all data is returned, return results
        query.on('end', function () {
            client.end();
            return res.json(results);
        });

        //handle Errors
        if (err) {
            console.log(err);
        }

    });
});




app.get("/*", function(req, res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});



app.listen(app.get("port"), function(){
    console.log("listening on port", app.get("port"));
});

