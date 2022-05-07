'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {

    static associate(models) {
      Roles.hasMany(models.Users, {
        foreignKey: 'role_id'
      })
    }

  }

  Roles.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 50],
          msg: "The name field must have more than 5 and less than 50 characteres"
        }
      }
    },
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Roles'
  });
  
  return Roles;
};