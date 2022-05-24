'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    googleId: {
      type: DataTypes.TEXT,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    gradeLevel: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    socialMedia:{
      type: DataTypes.STRING,
      allowNull: false
    },
    socialMediaHandle: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, {
    sequelize,
    tableName: "users",
    underscored: true,
    modelName: 'User',
  });
  return User;
};
