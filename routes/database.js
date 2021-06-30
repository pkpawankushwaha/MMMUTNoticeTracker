const mysql= require('mysql')

const conn=mysql.createConnection({
    host: 'host', // Replace with your host name
    user: 'user',      // Replace with your database username
    password: 'password',      // Replace with your database password
    database: 'database' // // Replace with your database Name
});


conn.connect(function(err) {
    if (err) throw err;
    else
    console.log('Database is connected successfully !');
});

module.exports = conn;