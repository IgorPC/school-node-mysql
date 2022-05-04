'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Classes extends Model {

    static associate(models) {
      Classes.hasMany(models.Registrations, {
        foreignKey: 'class_id'
      });
      Classes.belongsTo(models.Users, {
        foreignKey: 'teacher_id'
      });
      Classes.belongsTo(models.Levels, {
        foreignKey: 'level_id'
      });
    }

  }

  Classes.init({
    name: DataTypes.STRING,
    date_start: DataTypes.DATEONLY
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Classes',
  });

  return Classes;
};