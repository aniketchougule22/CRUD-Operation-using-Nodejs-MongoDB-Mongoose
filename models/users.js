const mongoose = require('mongoose');
const schema = mongoose.schema;

const users_schema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: null 
    },

    email: {
        type: String,
        default: null,
        // unique: true,
        trim: true,
        required: [ true, 'email is required' ]
    },

    phone: {
        type: Number,
        default: null,
        unique: true,
        trim: true,
        // min: [10, 'minimum 10 numbers required'],
        // max: [10, 'maximum 10 numbers required'],
        required: [ true, 'phone is required' ]
    },

    city: {
        type: String,
        trim: true,
        default: null
    },

    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('users', users_schema);