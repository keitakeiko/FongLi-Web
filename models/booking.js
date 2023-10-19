'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.STRING,
    paymentDay: DataTypes.STRING,
    deliveryWay: DataTypes.STRING,
    deliveryAddress: DataTypes.STRING,
    contactName: DataTypes.STRING,
    contactPhone: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    underscored: true,
  });
  Booking.associate = function (models) {
    // associations can be defined here
    Booking.belongsTo(models.BookingGoods, { foreignKey: 'bookingId' })
    Booking.hasMany(models.User, { foreignKey: 'userId' })
  };
  return Booking;
};