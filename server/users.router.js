const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
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

