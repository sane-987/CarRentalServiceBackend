const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolltable', {
    cityname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    'sum(q)': {
      type: DataTypes.DECIMAL(32,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'rolltable',
    timestamps: false
  });
};
