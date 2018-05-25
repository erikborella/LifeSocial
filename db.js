var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/Ftest")
            .then(conn => global.conn = conn.db("Ftest"))
            .catch(err => console.log(err))

function findAll(callback){  
    global.conn.collection("userData").find({}).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("userData").insert(customer, callback);
}

module.exports = { findAll, insert }