const Sequelize = require("sequelize")
const sequelize = require("../config/key")



const User = sequelize.define("user", {
    username : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    email : {
        type : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    password : {
        type  : Sequelize.DataTypes.STRING,
        allowNull : false
    },
    age : {
        type : Sequelize.DataTypes.INTEGER
    }
});

User.sync()
    .then(() => {
        console.log("Table and model synced user!")
    })
    .catch(() => {
        console.log("Error syncing")
    })

module.exports = User