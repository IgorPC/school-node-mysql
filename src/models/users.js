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
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [5, 50],
          msg: "The name field must have more than 5 and less than 50 characteres"
        }
      }
    },
    active: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "The Email Field is not a valid Email"
        }
      }
    }
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Users'
  });

  return Users;
};