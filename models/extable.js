const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('extable', {
    cityname: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    q: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'extable',
    timestamps: false
  });
};
