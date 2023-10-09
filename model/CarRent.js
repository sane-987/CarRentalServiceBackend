const Sequelize = require("sequelize")
const sequelize = require("../config/key")
const User = require("./User")

const CarRent = sequelize.define("carrent", {
    carId : {
        type : Sequelize.DataTypes.INTEGER,
        allowNull : false
    },
    userId : {
        type : Sequelize.DataTypes.INTEGER, 
        allowNull : false
        // references : "users",
        // referencesKey : "id"
    },
    startDateTime : {
        type : Sequelize.DataTypes.DATE
    },
    endDateTime : {
        type : Sequelize.DataTypes.DATE
    }
},
{
    freezeTableName : true
});

CarRent.sync()
    .then(() => {
        console.log("Table and model synced carrent!")
    })
    .catch(() => {
        console.log("Error syncing","carrent")
})

module.exports = CarRent;
