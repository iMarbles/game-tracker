const auth = require("./auth");
const games = require("./games");

module.exports = app =>{
  app.use("/auth", auth);
  app.use("/games", games);
}
