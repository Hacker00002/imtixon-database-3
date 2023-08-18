const { Pool } = require("pg");
const dotenv = require("dotenv");
// DOTENV
dotenv.config();
// POOL SETTINGS
const pool = new Pool({
    host: process.env.DB_HOST ?? "127.0.0.1",
    port: process.env.DB_PORT ?? 5432,
    user: process.env.DB_USER ?? "postgres",
    password: process.env.DB_PASSWORD ?? "123",
    database: process.env.DB_DATABASE ?? "market",
});
// CREATE FETCH
const fetch = async (SQL, ...params) => {
    const client = await pool.connect();
    try {
        const { rows } = await client.query(SQL, params.length ? params : null);
        return rows;
    } catch (err) {
        console.log(err);
    } finally {
        client.release();
    }
};
// EXPORT FETCH
module.exports = {
    fetch,
};
