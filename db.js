var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/Ftest")
            .then(conn => global.conn = conn.db("Ftest"))
            .catch(err => console.log(err));

function findAll(callback){
    global.conn.collection("userData").find({}).toArray(callback);
}

function insert(customer, callback){
    global.conn.collection("userData").insert(customer, callback);
}

function update(querry, data, callback) {
  var adress = {"user" : querry};


  var upd = {
    $set : {
      "gameValues" : {
        "idade": data.idade,
        "diasVividos": data.diasVividos,
        "money": data.money
      }
      
    }
  };

  console.log(querry);


  global.conn.collection("userData").updateOne(adress, upd, callback);
}

module.exports = { findAll, insert, update }
