'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Roles', [
      {
        name: "Teacher",
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Student",
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Administrator",
        active: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
