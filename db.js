var mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://localhost/LifeSocial")
	.then(conn => global.conn = conn.db("LifeSocialNocry"))
	.catch(err => console.log(err));

function getUserData(callback) {
	global.conn.collection("userData").find({}).toArray(callback);
}

function insertUserData(customer, callback) {
	global.conn.collection("userData").insert(customer, callback);
}

function getUsernames(callback) {
	global.conn.collection("username").find({}).toArray(callback);
}

function insertUsernames(customer, callback) {
	global.conn.collection("username").insert(customer, callback);
}


function saveData(querry, data, callback) {
	var adress = { "user": querry };
	var upd = {
		$set: data
	}

	global.conn.collection("userData").updateOne(adress, upd, callback);
	

}

module.exports = { getUserData, insertUserData, getUsernames, insertUsernames, saveData }
