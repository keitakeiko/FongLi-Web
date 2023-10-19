'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    companyName: DataTypes.STRING,
    account: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password: DataTypes.STRING,
    GUINumber: DataTypes.STRING,
    address: DataTypes.STRING,
    introduction: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
    underscored: true,
  });
  User.associate = function (models) {
    // associations can be defined here
    User.belongsTo(models.Booking, { foreignKey: 'userId' })

  };
  return User;
};