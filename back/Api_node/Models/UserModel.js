const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    start_time: {
        type: Date,
        require: true
    },
    end_time: {
        type: Date,
        require: true
    },
});

const UserModel = mongoose.model(
    "User",
    UserSchema
);

module.exports = { UserModel };