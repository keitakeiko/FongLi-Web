'use strict';
module.exports = (sequelize, DataTypes) => {
  const BookingGoods = sequelize.define('BookingGoods', {
    bookingId: DataTypes.STRING,
    goodsId: DataTypes.STRING,
    shipDate: DataTypes.DATE,
    isOrdered: DataTypes.BOOLEAN,
    amount: DataTypes.INTEGER,
    deliveryOne: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    deliveryPhone: DataTypes.STRING,
    notes: DataTypes.STRING
  }, {
    underscored: true,
  });
  BookingGoods.associate = function (models) {
    // associations can be defined here
    BookingGoods.hasMany(models.Booking, { foreignKey: 'bookingId' })
    BookingGoods.hasMany(models.Goods, { foreignKey: 'goodsId' })
  };
  return BookingGoods;
};