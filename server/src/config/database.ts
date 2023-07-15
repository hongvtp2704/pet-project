import mysql from 'mysql2';

const pool = mysql.createPool({
 host: process.env.DATABASE_HOST,
 user: process.env.DATABASE_USER as string,
 password: process.env.DATABASE_PASSWORD,
 database: process.env.DATABASE_NAME as string,
 waitForConnections: true,
 connectionLimit: 20,
 idleTimeout: 10000,
 queueLimit: 0,
 enableKeepAlive: true,
 keepAliveInitialDelay: 0,
});

const poolPromise = pool.promise();

// For pool initialization, see above
pool.getConnection(function(err, conn) {
 // Do something with the connection
 console.log(err)
 // Don't forget to release the connection when finished!
 pool.releaseConnection(conn);
});

export { pool, poolPromise };
