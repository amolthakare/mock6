const express = require("express");
require('dotenv').config();
const { Router } = require("express");
const { FlightModel } = require("../models/flight.model");
const flightRoute = Router();

flightRoute.get("/",async(req,res)=>{
    const flight = await FlightModel.find()
    res.status(200);
    res.send(flight);
})

flightRoute.get("/:id",async(req,res)=>{
    const id = req.params.id;
    const note = await FlightModel.findOne({"_id":id});
    res.status(200);
    res.send(note);
})

flightRoute.post("/",async(req,res)=>{
    const payload = req.body;
    try{
        const flight = new FlightModel(payload);
        await flight.save();
        res.status(201);
        res.send(flight);
    }
    catch(err){
        console.log(err);
        res.send("err");
    }
})

flightRoute.patch("/:id",async(req,res)=>{
    const payload = req.body;
    const id = req.params.id;
    const note = await FlightModel.findOne({"_id":id});
    console.log(note);
    try{
        await FlightModel.findByIdAndUpdate({"_id":id},payload);
        res.status(204)
        res.send("Updated the flight")
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.send({error:"flight doesn't exsist"})
    }
})

flightRoute.delete("/:id",async(req,res)=>{
    const payload = req.body;
    const id = req.params.id;
    const note = await FlightModel.findOne({"_id":id});

    try{
        await FlightModel.findByIdAndDelete({"_id":id});
        req.status(202);
        res.send("flight deleted");
 
    }
    catch(err){
        console.log(err);
        res.status(404);
        res.send({error:"flight doesn't exsist"})
    }
})

module.exports={
    flightRoute
}