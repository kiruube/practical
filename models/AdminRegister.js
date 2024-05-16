const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const AdminRegisterSchema = new mongoose.Schema({
    fullName:{
        type: 'string',
        trim:true
    },
    location:{
        type: 'string',
        trim:true
    },
    contact:{
        type: 'string',
        trim:true
    },
    email:{
        type: 'string',
        trim:true
    },
    role:{
        type: 'string',
        trim:true
    },
    password:{
        type: 'string',
        trim:true
    }
});

AdminRegisterSchema.plugin(passportLocalMongoose, {
    usernameField:'email'
});
module.exports = mongoose.model('AdminRegister', AdminRegisterSchema);