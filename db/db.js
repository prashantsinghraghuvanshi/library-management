const mysql=require('mysql2');

const pool=mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mysql@01NEW',
    database: 'library',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const promisePool = pool.promise();

module.exports= promisePool;