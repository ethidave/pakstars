const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '192.250.239.87',
    user: 'filimooo_pakstar',
    password: '.)b~zv9Gste5',
    database: 'filimooo_pakstar'
});

// const connection = mysql.createPool({
//     host: 'localhost',
//     user: 'admin',
//     password: 'Dph51mO5qkS8U1k',
//     database: '92lottery'
// });

export default connection;