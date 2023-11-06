// Viết code để connect đến mongodb
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/F8_education_dev');
        console.log('successful....');
    } catch (error) {
        console.log('Error');
    }
}

module.exports = { connect };
