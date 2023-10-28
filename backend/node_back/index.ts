const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const fs = require('fs');

var db = mysql.createConnection({
    host: "156.17.72.12",
    user: "root",
    password: "",
    database: "besthacks"
});

db.connect((err) => {
    if (err) throw err;
    // console.log("connected!");
});

const app = express();

function db_query(sql, params) {
  return new Promise((resolve, reject) => {
    db.query(sql, params, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.json({ status: "pong" });
});

app.get('/joboffers', async (req, res) => {
    var rows = await db_query("SELECT * FROM joboffers");
    res.json(rows);
});

app.get('/get_logo', async (req, res) => {
    let filename = req.query.filename;

    if (filename === undefined) {
        return res.json({status: "ERROR", message: "filename not provided"});
    }

    fs.readFile('./logos/' + filename, function(err, data) {
        if (err) {
            return res.json({status: "ERROR", message: "logo not found"});
        }
        res.setHeader('Content-Type', 'image/png');
        return res.send(data);
    })
});

app.get('/search', async (req, res) => {
    let query = req.query.query;

    if (query === undefined) {
        return res.json({status: "ERROR", message: "query not provided"});
    }

    var rows = await db_query("SELECT * FROM `joboffers` WHERE `description` LIKE '%" + query + "%' OR `employer` LIKE '%" + query + "%'");

    res.json(rows);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
