require("dotenv").config();
const SERVER_PORT = process.env.SERVER_PORT || 4000;

const JWT_SECRET = process.env.JWT_SECRET || "testerKey";

const JWT_EXPIRES = process.env.JWT_EXPIRY || "365d";

module.exports = {
  SERVER_PORT,
  JWT_SECRET,
  JWT_EXPIRES
};