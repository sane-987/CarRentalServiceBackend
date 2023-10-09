const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cartable', {
    cityname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    brandname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    carname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    q: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cartable',
    timestamps: false
  });
};
