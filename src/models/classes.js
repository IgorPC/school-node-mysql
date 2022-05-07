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
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 50],
          msg: "The name field must have more than 5 and less than 50 characteres"
        }
      }
    },
    date_start: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: {
          args: true,
          msg: "date_start field only accept dates"
        }
      }
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Classes',
  });

  return Classes;
};