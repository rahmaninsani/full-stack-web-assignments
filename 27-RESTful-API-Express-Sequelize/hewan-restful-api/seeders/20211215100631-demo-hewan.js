"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Hewans", [
      {
        nama: "si kucing",
        namaSpesies: "kucing",
        umur: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "dodo",
        namaSpesies: "kelinci",
        umur: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nama: "rere",
        namaSpesies: "kucing",
        umur: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Hewans", null, {});
  },
};
