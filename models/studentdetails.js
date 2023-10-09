const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('studentdetails', {
    studid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    enrollmentno: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dateofjoining: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'studentdetails',
    timestamps: false
  });
};
