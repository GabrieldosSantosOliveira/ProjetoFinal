'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
  await  queryInterface.addCollum("autors","livroId",{
    allowNull: false,
    type: Sequelize.INTEGER,
    references: {
    model: "livros",
    key: "id"
    }
  })
  },

  async down (queryInterface, Sequelize) {
  
     await queryInterface.removeCollum("autors", "livroId")
  
  }
};
