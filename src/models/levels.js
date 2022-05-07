'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  
  class Levels extends Model {

    static associate(models) {
      Levels.hasMany(models.Classes, {
        foreignKey: 'level_id'
      });
    }

  }

  Levels.init({
    description: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 50],
          msg: "The description field must have more than 5 and less than 50 characteres"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Levels',
  });

  return Levels;
};