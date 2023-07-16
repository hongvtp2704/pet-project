import mysql from 'mysql2';

// Todo: config env variables with vite
const pool = mysql.createPool({
 host: process.env.DATABASE_HOST || "34.142.224.124",
 user: process.env.DATABASE_USER as string || "root",
 password: process.env.DATABASE_PASSWORD || "312002",
 database: process.env.DATABASE_NAME as string || "pet_project",
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
