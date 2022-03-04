'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return await queryInterface.createTable('users',{
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usr_name: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      usr_email: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      usr_password: {
        allowNull: false,
        type: Sequelize.STRING(50),
      },
      created_at:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at:{
        allowNull: false,
        type: Sequelize.DATE,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users')
  }
};
