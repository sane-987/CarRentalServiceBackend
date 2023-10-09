const Sequelize = require('sequelize');
module.exports = function(Sequelize, DataTypes) {
  const sequelize = require("../config/key")
  return sequelize.define('Cardetails', {
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    selling_price: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    km_driven: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fuel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seller_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transmission: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    owner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mileage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    engine: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    max_power: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    torque: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seats: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    Booking_Status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Cardetails',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
