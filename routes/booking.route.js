const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { BookingModel } = require("../models/flight.model");
const bookingRoute = Router();

bookingRoute.get("/",async(req,res)=>{
    const reports = await BookingModel.find()
    res.send(reports);
})

bookingRoute.post("/create",async(req,res)=>{
    const payload = req.body;
    try{
        const report = new BookingModel(payload);
        await report.save();
        res.send(report);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})


module.exports={
    bookingRoute
}