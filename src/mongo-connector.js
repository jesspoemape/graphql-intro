const {MongoClient} = require('mongodb');
const {connection_string} = require('./../config.js');

// 1st things first
const MONGO_URL = connection_string;

// 2nd things second
module.exports = async () => {
    const db = await MongoClient.connect(MONGO_URL, (err, database) => db.close());
    return {Links: db.collection('links')};
}