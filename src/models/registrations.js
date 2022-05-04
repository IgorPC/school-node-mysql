'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Registrations extends Model {
 
    static associate(models) {
      Registrations.belongsTo(models.Users, {
        foreignKey: 'student_id'
      });
      Registrations.belongsTo(models.Classes, {
        foreignKey: 'class_id'
      });
      Registrations.belongsTo(models.Status, {
        foreignKey: 'status_id'
      })
    }

  }

  Registrations.init({
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Registrations',
  });
  
  return Registrations;
};