const express = require("express")
const router = express.Router()

const db = require("../config/key")
const bcrypt = require("bcrypt")

const { QueryTypes } = require("sequelize")
const Sequelize = require("sequelize")
const sequelize = require("../config/key")
const User = require("../models/users")(Sequelize, Sequelize.DataTypes)
const CarDetail = require("../models/Cardetails")(Sequelize, Sequelize.DataTypes)
const CarRent = require("../models/carrent")(Sequelize, Sequelize.DataTypes)


router.get("/getCarDetails", async(req, res) => {
    const cardetails = await CarDetail.findAll();
    res.send(cardetails)
})

router.post("/login", async(req, res, next) => {
    console.log(req.body.email)
    const user = await User.findOne({where : {email : req.body.email}})
    console.log(user)
    if(user){
        const password_valid = await bcrypt.compare(req.body.password, user.password)
        if(password_valid)
            {
                res.status(200).send("login successful")
                console.log("login success")
            }
        else
            res.status(400).json({error:"password is incorrect"})
    }
    else{
        res.status(404).json({ error : "User does not exist" })
        
    }
}
)

router.post("/register", async(req, res, next) => {
    
    const salt = await bcrypt.genSalt(10)

    var usr = {
        username : req.body.username,
        email : req.body.email,
        password : await bcrypt.hash(req.body.password, salt)
    }
    console.log(usr)
    const user = await User.findOne({where : {email : usr.email}})
    if (user) {
        res.status(409).send({message:"User already exists"})
        return next()
    }
    let created_user = await User.create(usr)
    res.status(201).json("User registered successfully")

})

router.post("/carBooking", async(req, res, next) => {

    const carid = req.body.carid
    const useremail = req.body.useremail
    const userid = await User.findOne({
        where : {
            email : useremail
        },
        attributes : ["id"]
    })
    console.log(userid["id"])
    


    //harcoding setDate to current date()
    let currDate = new Date()
    
    //hadcoding booking time to 3 days
    let endDate = new Date()
    endDate.setDate(currDate.getDate() + 3)

    currDate = currDate.toISOString().slice(0, 19).replace('T', ' ');
    endDate = endDate.toISOString().slice(0, 19).replace('T', ' ');
    console.log(currDate, endDate)


    //check if user has already booked the car
    const checkIfCarBooked = await CarRent.findOne({
        where : {
            carId : carid,
            userId : userid
        }
    })
    console.log(checkIfCarBooked)
    //check the availability of the car
    const carAvailability = await CarDetail.findOne({
        where : {
            id : carid,
            Booking_status : "unbooked"
        }
    })
    console.log(carAvailability)
    //console.log(checkIfCarBooked || carAvailability)
    if (!checkIfCarBooked && carAvailability) {
        const data = await CarRent.create({
            carId : carid,
            userId : userid["id"],
            startDateTime : currDate,
            endDateTime : endDate
        })
        await CarDetail.update(
            {Booking_Status : "booked"},
            {
                where : {
                    id : carid
                }
            }
        )
        res.status(201)
    }
    else {
        res.status(409).json("This Car is already Booked")
        
    }
    

    // //check car availabilty
    // const carAvailability = await CarDetail.findOne({
    //     where : {
    //         Booking_status : "unbooked"
    //     }
    // })
    // if(carAvailability) {
    //     const data = await CarRent.create({
    //         carId : carid,
    //         userId : userid,
    //         startDate : currDate,
    //         endDate : endDate
    //     })
    //     await CarDetail.update(
    //         {Booking_status : "booked"},
    //         {where : {id : carid}}
    //     )
    //     res.status(201).json("car booked success")
    // }
    // else{
    //     res.send("error booking, car not available")
    // }

    // **********************
    // //retrieve the userid from user table
    // const userId = await User.findOne({where : {emai : data.user}})
    
    // //retrieve carid from cartable
    
    // //check for the rented cars for that user
    // let ifexists = await CarRent.findAll({
    //     where : {
    //         userId : userId,
    //         carId : carId
    //     }
    // })

    

})


router.post("/fetchUserProfile", async(req, res, next) => {

    console.log(req.body.useremail)
    
    try {
        const userid = await User.findOne({
            where : {
                email : req.body.useremail
            },
            attributes : ["id"]
        })
        
        const carRent = await CarRent.findAll({
            where : {
                userId : userid["id"]
            },
            attributes : ["carId", "startDateTime", "endDateTime"]
        })
        let carIds = []
        carIds.push(carRent.map((e) => {
            return e["carId"]
        }))
    
        let [results, metadata] = await sequelize.query(
            `select cd.name, cr.carId, cr.startDateTime, cr.endDateTime from Cardetails cd inner join carrent cr where cd.id = cr.carId and cr.userId=${userid["id"]}`   
        )
        res.send(results)
    }
    catch(err) {
        console.log(err)
        next()
    }
})


module.exports = router;