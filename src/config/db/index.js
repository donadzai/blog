// Viết code để connect đến mongodb
const mongoose = require('mongoose');

function connect() {
    try {
        const conn1 = mongoose.createConnection('mongodb://127.0.0.1:27017/F8_education_dev');
        const conn2 = mongoose.createConnection('mongodb://127.0.0.1:27017/F8_accounts');
        const conn = {
            conn1,
            conn2,
        };
        return conn;
    } catch (error) {
        console.log('Error');
    }
}

module.exports = { connect };
