const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../../config/db');
const conn2 = db.connect().conn2;

const Account = new Schema({
    username: { type: String, maxLength: 255 },
    password: { type: String, maxLength: 600 },
});

module.exports = conn2.model('Account', Account);
