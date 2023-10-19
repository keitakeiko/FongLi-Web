'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.STRING
      },
      paymentDay: {
        type: Sequelize.STRING
      },
      deliveryWay: {
        type: Sequelize.STRING
      },
      deliveryAddress: {
        type: Sequelize.STRING
      },
      contactName: {
        type: Sequelize.STRING
      },
      contactPhone: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bookings');
  }
};