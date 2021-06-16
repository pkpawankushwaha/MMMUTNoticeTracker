const mysql= require('mysql')

const conn=mysql.createConnection({
    host: 'sql6.freemysqlhosting.net', // Replace with your host name
    user: 'sql6419435',      // Replace with your database username
    password: 'NaE4qiEgYu',      // Replace with your database password
    database: 'sql6419435' // // Replace with your database Name
});


conn.connect(function(err) {
    if (err) throw err;
    else
    console.log('Database is connected successfully !');
});

module.exports = conn;