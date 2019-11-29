const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");
const multer = require('multer');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get("/", async (req, res)=>{
    const xs = await User.find({});
    res.send(xs);
});
router.get("/onlineCount/", async (req, res)=>{
    const r = getRandomInt(0, 20);
    res.status(200).send(r+"");
});

/** Add something here*/
router.post("/update-user/", async (req, res)=>{

    let user = await User.findOne({personalCode: req.body.idcode});

    console.log("usr json: ", JSON.stringify(user));

    if(!user) {
        user = new User({fullName: req.body.name, address: req.body.location, phoneNumber: req.body.phone, personalCode: req.body.idcode});
    } else {
        user.fullName = req.body.name;
        user.address = req.body.location;
        user.phoneNumber = req.body.phone;
        user.personalCode = req.body.idcode;
    }

    user.save(err => {
        if(err) return reject(err);
        console.log("success save");
    });

    res.send("asdasdasd : "+JSON.stringify(user));
});


/** Add something here*/
router.post("/post-entry/", async (req, res)=>{

    const user = new User({fullName: req.body.name, address: req.body.location, phoneNumber: req.body.phone});
    user.save(err => {
        if(err) return reject(err);
        console.log("success save");
    });

    res.send("asdasdasd : "+JSON.stringify(user));
});

module.exports = router;

