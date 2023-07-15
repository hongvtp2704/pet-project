import mysql from 'mysql2';

const pool = mysql.createPool({
 host: process.env.DATABASE_HOST,
 user: process.env.DATABASE_USER as string,
 password: process.env.DATABASE_PASSWORD,
 database: process.env.DATABASE_NAME as string,
 port: 3306,
 waitForConnections: true,
 connectionLimit: 20,
 idleTimeout: 10000,
 queueLimit: 0,
 enableKeepAlive: true,
 keepAliveInitialDelay: 0,
});

const poolPromise = pool.promise();

pool.getConnection(function(err, conn) {
 if(err){
  console.log(err)
 }else{
  console.log("DB connect successfully!!!")
 }
 pool.releaseConnection(conn);
});

export { pool, poolPromise };
