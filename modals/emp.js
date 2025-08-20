const mongoose = require('mongoose');

const empSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
});

const emp = mongoose.model('emp', empSchema);
module.exports = emp;

