const Pool = require("pg").Pool;
const pool = new Pool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT)
});

module.exports = {
  query: (text, params) =>
    pool.query(text, params).then(res => {
      const start = Date.now();
      const duration = Date.now() - start;
      console.log("executed query", { text, duration, rows: res.rowCount });

      return res;
    })
};