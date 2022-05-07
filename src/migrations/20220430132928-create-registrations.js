'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      student_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Users', key: 'id' }
      },
      class_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Classes', key: 'id' }
      },
      status_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Status', key: 'id' }
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Registrations');
  }
};