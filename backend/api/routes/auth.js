const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../../config/db");
const { JWT_SECRET, JWT_EXPIRES } = require("../../config/server");
const { fail, success, error500 } = require("../constants/error");

const router = express.Router();
const saltRounds = 10;

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const userCheck = await db.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    const user = userCheck.rows[0];
    // @ts-ignore
    const passwordHash = user ? user.password : null;
    bcrypt.compare(password, passwordHash, (err, isSame) => {
      if (isSame) {
        const token = jwt.sign(
          // @ts-ignore
          { username: user.username },
          JWT_SECRET,
          { expiresIn: JWT_EXPIRES }
        );
        res.status(200).json({
          status: "success",
          token
        });
      } else {
        res.status(200).json({
          status: fail,
          message: "Username or password is incorrect."
        });
      }
    });
  } catch (error) {
    console.log(error);
    return next(error500);
  }
});

router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  try {
    await bcrypt.hash(password, saltRounds, async (err, hash) => {
      const usernameCheck = await db.query(
        "SELECT * FROM users WHERE username = $1",
        [username]
      );

      if (usernameCheck.rows.length) {
        res
          .status(200)
          .send({ status: "fail", message: "That username already exists." });
      } else {
        const userid = await db.query(
          "INSERT INTO users (username, password) VALUES ($1, $2)",
          [username, hash]
        );

        res.status(201).send({
          status: success,
          message: `Successfully registered as ${username}.`
        });
      }
    });
  } catch (error) {
    return next(error500);
  }
});


module.exports = router;
