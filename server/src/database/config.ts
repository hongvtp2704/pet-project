import * as mysql from 'mysql2';

const pool = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER as string,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME as string,
    waitForConnections: true,
    connectionLimit: 10,
    idleTimeout: 10000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
});

const connection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER as string,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME as string
});

export {connection, pool};

