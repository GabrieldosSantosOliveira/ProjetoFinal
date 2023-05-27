'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('exemplary', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      bookId: {
        allowNull: null,
        type: Sequelize.STRING,
        references: {
          model: 'books',
          key: 'id',
        },
      },
      authorId: {
        allowNull: null,
        type: Sequelize.STRING,
        references: {
          model: 'authors',
          key: 'id',
        },
      },
    })
  },

  async down(queryInterface) {
    await queryInterface.dropTable('exemplary')
  },
}
