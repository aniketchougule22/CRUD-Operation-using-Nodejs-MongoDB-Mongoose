const mongoose = require('mongoose');
const schema = mongoose.schema;

const mobile_schema = mongoose.Schema({
    model: {
        type: String,
        trim: true,
        default: null 
    },

    brand: {
        type: String,
        default: null,
        // unique: true,
        trim: true
    },

    color: {
        type: String,
        default: null,
        trim: true
    },

    price: {
        type: Number,
        default: null,
        trim: true,
        required: [ true, 'price is required' ]
    },

    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('mobiles', mobile_schema);