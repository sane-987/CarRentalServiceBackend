const { Model, DataTypes } = require("sequelize")
const Sequelize = require("sequelize")
const sequelize = require("../config/key")

// module.exports = (sequelize, DataTypes) => {
    class CarDetail extends Model {

    }
    CarDetail.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey : true,
                autoIncrement : true,
            },
            name : DataTypes.STRING,
            year : DataTypes.INTEGER,
            selling_price : DataTypes.INTEGER,
            km_driven : DataTypes.INTEGER,
            fuel : DataTypes.STRING,
            seller_type : DataTypes.STRING,
            transmission : DataTypes.STRING,
            owner : DataTypes.STRING,
            mileage : DataTypes.STRING,
            engine : DataTypes.STRING,
            max_power : DataTypes.STRING,
            torque : DataTypes.STRING,
            seats : DataTypes.DOUBLE,
            Booking_Status : DataTypes.STRING,

        },
        {
            sequelize,
            modelName : "CarDetail",
            tableName : "CarDetails",
            underscore: true,
            timestamps: false,
            freezeTableName: true
        }
    );

module.exports = CarDetail
