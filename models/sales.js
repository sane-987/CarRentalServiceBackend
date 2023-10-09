const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sales', {
    salesman_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    commission: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sales',
    timestamps: false
  });
};
