const express = require("express");
const db = require("../../config/db");
const { fail, success, error500 } = require("../constants/error");
const router = express.Router();

router.post("/getByStatus", async (req, res, next) => {
  const { username, status } = req.body;

  try {
    const results = await db.query(
      "SELECT * FROM games WHERE username = $1 AND status_id = $2",
      [username, status]
    );

    res.status(200).json(results.rows);
  } catch (error) {
    console.log(error);
    return next(error500);
  }
});

router.post("/getByUserRawg", async (req, res, next) => {
  const { username, rawgid } = req.body;

  try {
    const results = await db.query(
      "SELECT * FROM games WHERE username = $1 AND rawg_id = $2",
      [username, rawgid]
    );

    res.status(200).json(results.rows[0]);
  } catch (error) {
    console.log(error);
    return next(error500);
  }
});

router.post("/newGame", async (req, res, next) => {
  const { rawgid, username, name, imgsrc } = req.body;

  try {
    const statusid = "B";

    const results = await db.query(
      `INSERT INTO games (rawg_id, status_id, username, name, img_src) 
      VALUES ($1, $2, $3, $4, $5) RETURNING game_id`,
      [rawgid, statusid, username, name, imgsrc]
    );

    res.status(201).send({
      status: success,
      gameid: results.rows[0].game_id,
      message: `New backlog item created with id: ${results.rows[0].game_id}.`
    });
  } catch (error) {
    console.log(error);
    return next(error500);
  }
});

router.post("/updateGame", async (req, res, next) => {
  const { gameid, numOfHours, rating, comments, status } = req.body;
  try {
    await db.query(
      `UPDATE games SET num_of_hours = $1, rating = $2, comments = $3, status_id = $4
      WHERE game_id = $5`,
      [numOfHours, rating, comments, status, gameid]
    );

    res.status(200).send({
      status: success,
      message: `Game updated with id: ${gameid}.`
    });
  } catch (error) {
    console.log(error);
    return next(error500);
  }
});

router.post("/deleteGame", async (req, res, next) => {
  const { gameid } = req.body;
  try {
    await db.query(
      `DELETE FROM games WHERE game_id = $1`,
      [gameid]
    );

    res.status(200).send({
      status: success,
      message: `Game deleted with id: ${gameid}.`
    });
  } catch (error) {
    console.log(error);
    return next(error500);
  }
});

module.exports = router;
