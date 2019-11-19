const MongoMemoryServer = require('mongodb-memory-server').MongoMemoryServer;
const mongoose = require("mongoose");
const {Product, categories} = require("./product.model.js");
const createProducts = require("./mockData.js");

async function startInMemoryDB(){
  const mongod = new MongoMemoryServer();
  const uri = await mongod.getConnectionString();
  const port = await mongod.getPort();
  const dbPath = await mongod.getDbPath();
  const dbName = await mongod.getDbName();

  connect({
    uri, port, dbName, dbPath
  });
}

function connect({uri, port, dbName, dbPath}){
  mongoose.connect(`${uri}`, {useNewUrlParser: true})
  .then(res =>{
    console.log("Successfully connected!")
    migrate();
  })
  .catch( err =>{
    console.log('error was', err);
  });
}

async function migrate(){
  const promises = createProducts().map(productData => {
    const p = new Product(productData);
    return p.save();
  });
  await Promise.all(promises);
  await Product.count({});
}

startInMemoryDB();


