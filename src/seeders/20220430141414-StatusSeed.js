'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Status', [
      {
        description: "Pending",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        description: "Active",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        description: "Inactive",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        description: "Canceled",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Status', null, {});
  }
};
