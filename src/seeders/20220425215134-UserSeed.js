'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        name: "Admin Teacher",
        active: 1,
        email: "admin@teacher.com",
        role_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: "Admin Student",
        active: 1,
        email: "admin@student.com",
        role_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Users', null, {});
  }
};
