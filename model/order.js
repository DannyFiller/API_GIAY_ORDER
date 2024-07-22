const mongoose = require('mongoose');


const orderSchema =  new mongoose.Schema({
    Items: [{
        Shoe: {
            type: mongoose.Types.ObjectId,
            ref: 'Shoe',
            required: true
        },
        Quantity: {
            type: Number,
            default: 1
        },
        Size: {
            type: Number,
            required: false
        }
    }],
    NameUser: {
        type: String,
        require:true,
    },
    Email: {
        type: String,
        require:true,
    },
    DateOrder: {
        type: Date,
        require:true,
    },
    Price: {
        type: Number,
        require:true,
    },
    
});

const Order = mongoose.model('Order', orderSchema);

module.exports = {Order};
