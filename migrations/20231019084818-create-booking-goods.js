'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('BookingGoods', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookingId: {
        type: Sequelize.STRING
      },
      goodsId: {
        type: Sequelize.STRING
      },
      shipDate: {
        type: Sequelize.DATE
      },
      isOrdered: {
        type: Sequelize.BOOLEAN
      },
      amount: {
        type: Sequelize.INTEGER
      },
      deliveryOne: {
        type: Sequelize.STRING
      },
      licensePlate: {
        type: Sequelize.STRING
      },
      deliveryPhone: {
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
    return queryInterface.dropTable('BookingGoods');
  }
};