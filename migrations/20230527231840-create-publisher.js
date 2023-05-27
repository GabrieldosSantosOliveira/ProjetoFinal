'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publisher', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: null,
        type: Sequelize.STRING,
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('publisher')
  },
}
