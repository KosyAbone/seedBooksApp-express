const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true, default: null},
    lastName: {type: String, required: true, default: null},
    email: {type: String, required: true, default: null, unique: true},
    phone: {type: String, required: true, default: null},
    gender:{type: String, required: true},
    address:{type: String, required: true, min:10, max:100},
    password: {type: String, required: true, default: null},
    token: {type: String},
    dateCreated: {type: Date, default: new Date()}
})

const User = mongoose.model('User', UserSchema)
module.exports = User