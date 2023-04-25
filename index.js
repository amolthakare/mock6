const express = require("express");
require('dotenv').config();
const { connection } = require("mongoose");
const UserRoutes = require("./routes/user.route");
const cors = require("cors");
const {flightRoute} = require("./routes/flight.route");

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}));

app.use("/user",UserRoutes);
app.use("/flights",flightRoute);

app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("connected to mongo");
    }
    catch(err){
        console.log("msg:",err);
    }
    console.log(`connected to port ${process.env.port} successfully`)
})
