// import Express as express
const express = require("express");
// import db connection from config/connection module
const sequelize = require("./Config/connection");

// Create express app as app
const app = express();
// Create protected PORT variable
const PORT = process.env.PORT || 3000;

// load middleware function
app.use(
  // parse incoming requests with encoded URLs using qs lib
  express.urlencoded({ extended: true })
);
// load middleware function
app.use(
  // parse incoming requests with json payloads
  express.json()
);

sequelize.syce({ force: false }).then(() => {
  // assign app to listen to specific port
  app.listen(PORT, () => {
    // print message showing that server is running
    console.log(`App listening on port ${PORT}`);
  });
});
