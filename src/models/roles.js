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
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Roles'
  });
  
  return Roles;
};