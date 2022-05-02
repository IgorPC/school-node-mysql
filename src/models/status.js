'use strict';

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

  class Status extends Model {

    static associate(models) {
      Status.hasMany(models.Registrations, {
        foreignKey: 'status_id'
      })
    }
  }

  Status.init({
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Status',
  });

  return Status;
};