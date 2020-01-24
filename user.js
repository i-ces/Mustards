const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    dob: {type: Date, required: true},
    //gender: {type: , required: true},
    phone: {type: Number, required: true},
    permanentAddress: {type: String, required: true},
    temporaryAddress: {type: String, required: true},
    //password: {type: String, required: true},
    email: {type: String, required: true},
    blood: {type: String, required: true}
})

module.exports = mongoose.model('User', userSchema);