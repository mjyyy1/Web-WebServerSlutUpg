const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    text: String,
    text: String
});

const User = mongoose.model('User', UserSchema);


exports.createUser = (inMail, inUsername, inPassword) => {
    var user = new User({
        email: inMail,
        text: inUsername,
        text: inPassword
    })

    return user
}