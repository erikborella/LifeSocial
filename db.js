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

function update(querry, data, callback) {
  var adress = {"user" : querry};


  var upd = {$set : {
    "dados": {
      "nome" : data.nome,
      "sobrenome" : data.sobrenome,
      "email": data.email,
      "idade": data.idade,
      "diasVividos": data.diasVividos,
      "money": data.money
    }
  }}

  console.log(upd);


  // global.conn.collection("userData").updateOne(adress, upd, callback);
}

module.exports = { findAll, insert, update }
