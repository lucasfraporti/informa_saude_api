const mysql = require('mysql');

var pool = mysql.createPool({
    "connectionLimit" : 1000,
    "user" : "b08dd579777512",
    "password": "e60b959d",
    "database" : "heroku_b0e3208eb8e89b7",
    "host": "us-cdbr-east-06.cleardb.net",
    "port": 3306
});

exports.execute = (query, params=[]) => {
    return new Promise((resolve, reject) => {
        pool.query(query, params, (error, result, fields) => {
            if (error) {
                reject(error);
            } else {
                resolve(result)
            }
        });
    })
}

exports.pool = pool;