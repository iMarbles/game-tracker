const dotenv = require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const expressjwt = require("express-jwt");

const cors = require("cors");
const bodyParser = require("body-parser");

const mountRoutes = require("./api/routes");
const { SERVER_PORT, JWT_SECRET } = require("./config/server");

var allowedOrigins = ["http://localhost:3000"];

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(
  cors({
    origin: function(origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    }
  })
);

const jwtMiddleware = expressjwt({
  secret: JWT_SECRET,
  algorithms: ['RS256']
});

app.get("/", jwtMiddleware, (request, response) => {
  response.json({ info: "Welcome to your Express with PosgreSQL server :)" });
});

mountRoutes(app);

// Unauthorized error handling
app.use(function(err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send(err);
  } else {
    next(err);
  }
});

app.listen(SERVER_PORT, () => {
  console.log(`App running on port ${SERVER_PORT}.`);
});