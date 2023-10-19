'use strict';
module.exports = (sequelize, DataTypes) => {
  const Goods = sequelize.define('Goods', {
    goodsName: DataTypes.STRING,
    detail: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.INTEGER,
    goodsPhoto: DataTypes.STRING,
    department: DataTypes.STRING
  }, {
    underscored: true,
  });
  Goods.associate = function (models) {
    // associations can be defined here
    Goods.belongsTo(models.BookingGoods, { foreignKey: 'goodsId' })
  };
  return Goods;
};