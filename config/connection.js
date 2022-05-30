// import and config dotenv module
require("dotenv").config();
// Import Sequelize module
const Sequelize = require("sequelize");

// Create new connection to db using sequelize
const sequelize = new Sequelize(
  // pass name of db into connection obj.
  process.env.DB_NAME,
  // pass db user into connection obj.
  process.env.DB_USER,
  // pass db password into connection obj.
  process.env.DB_PW,
  // pass connection params
  {
    host: "localhost",
    dialect: "mysql2",
    dialectOptions: {
      decimalNumbers: true,
    },
  }
);

// export connection to db as 'sequelize'
module.exports = sequelize;
