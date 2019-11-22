const express = require("express");
const router = express.Router();
const {User} = require("./user.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await User.find({});
  res.send(xs);
});

/** Add something here*/

module.exports = router;

