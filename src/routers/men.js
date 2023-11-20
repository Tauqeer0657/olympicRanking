const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/men")

// post data in database

router.post("/men",async (req,res) => {
    try{
        const addingMensRecords = new MensRanking(req.body);
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.status(201).send(insertMens);
    }catch(e){
        res.status(400).send(e);
    }
})

// get data from the database

router.get("/men",async (req,res) => {
    try{
        const getMen = await MensRanking.find({}).sort({"ranking":1});
        res.send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
})

// get the data of individual person 

router.get("/men/:id",async (req,res) => {
    try{
        const _id = req.params.id;
        const getMan = await MensRanking.findById(_id);
        res.send(getMan);
    }catch(e){
        res.status(400).send(e);
    }
})

// update the data 

router.patch("/men/:id",async (req,res) => {
    try{
        const _id = req.params.id;
        const getMan = await MensRanking.findByIdAndUpdate(_id,req.body,{
            new : true
        });
        res.send(getMan);
    }catch(e){
        res.status(500).send(e);
    }
})

// delete the data 

router.delete("/men/:id",async (req,res) => {
    try{
        const _id = req.params.id;
        const getMan = await MensRanking.findByIdAndDelete(_id);
        res.send(getMan);
    }catch(e){
        res.status(500).send(e);
    }
})

module.exports = router;