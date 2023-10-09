const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studentstipend', {
    studid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    project: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    stipend: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studentstipend',
    timestamps: false
  });
};
