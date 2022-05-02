'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Users extends Model {
  
    static associate(models) {
      Users.hasMany(models.Classes, {
        foreignKey: 'teacher_id'
      });
      Users.hasMany(models.Registrations, {
        foreignKey: 'student_id'
      });
      Users.belongsTo(models.Roles, {
        foreignKey: 'role_id'
      });
  
    }
  }

  Users.init({
    name: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users'
  });

  return Users;
};