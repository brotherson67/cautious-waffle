const { Model, DataTypes } = require("sequelize");

// Each Model corresponds to an SQL table
class User extends Model {}

User.init(
  // this first object is where the model attributes are defined
  {
    // the id will be the User tables primary key
    id: {
      // call imported DataTypes object to access its datatypes
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // the username will be
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      // insert a default username
      defaultValue: "unknown",
    },
  },
  // This second object is for all other model options
  {
    // The table will be named after the model, this keeps it from being pluralized automatically
    freezeTableName: true,
  }
);

// export this model for use elsewhere
module.exports = User;
