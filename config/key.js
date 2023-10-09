const Sequelize = require("sequelize");


const sequelize = new Sequelize("cardb", "root", "root", {
    dialect : "mysql",
    
})

sequelize.authenticate()
.then(() => {
    console.log("Connection successfull")
})
.catch((err) => {
    console.log("Error connecting to Database")
})

module.exports = sequelize


// let connection = mysql.createConnection({
//     host : "localhost",
//     user : "newuser",
//     password : "12345",
//     database : "cardb"
// })

// connection.connect(function(err) {
//     if (err) {
//         return console.log(err)
//     }
//     console.log("connected to database")
// })

// connection.end(function(err) {
//     if (err) console.log(err.message)
//     console.log("closing the connection")
// })