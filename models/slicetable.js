const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('slicetable', {
    cityname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    carname: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'slicetable',
    timestamps: false
  });
};
