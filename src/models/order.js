const mongoose = require('mongoose');
const Carts = require('./cart');

const orderSchema = new mongoose.Schema({
    cart: {
        type: Schema.Type.ObjectID,
        ref: 'Carts'
    },
    address: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    statusUpdates:[
        {
            productID: {
                type: String,
                required: true
            },
            productName: {
                type: String,
                required: true
            },
            productStatus: {
                type: String,
                enum: ['Shipped', 'Cancelled']
            },
            customerDecision: {
                type: String,
                enum: ['Accepted', 'Rejected']
            }
        }
    ],
})

module.exports = mongoose.model('Orders', orderSchema);