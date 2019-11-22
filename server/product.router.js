const express = require("express");
const router = express.Router();
const {Product} = require("./product.model.js");
const mongoose = require("mongoose");

router.get("/", async (req, res)=>{
  const xs = await Product.find({});
  res.send(xs);
});

router.get("/random", async (req, res)=>{
  const xs = await Product.find({});
  const r = getRandomInt(0, xs.length - 1);
  res.status(200).send(xs[r])
});

router.get("/similar/:productId", async (req, res)=>{
    console.log("similar", req.params.productId);
    const xs = await Product.findById(req.params.productId);

    if(xs !== null) {

        console.log("xs", JSON.stringify(xs));
        let title = xs.title;
        title = title.split(" ")[0];

        console.log("title", title);
        const prods = await Product.find({title: {$regex: title, $options: 1}});
        console.log("prods", JSON.stringify(prods));

        return res.status(200).send(prods);
    }

    console.log("product not found with ID: "+req.params.productId);
    res.status(200).send([]);
});

module.exports = router;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
