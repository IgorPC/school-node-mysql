'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Classes', 'deletedAt', {
        allowNull: true,
        type: Sequelize.DATE
    });
  },
  async down(queryInterface) {
    await queryInterface.removeColumn('Classes', 'deletedAt');
  }
};