const mongoose = require('mongoose');


const CartSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },

    plan: {
            subscriptionId:{
                type: String
            },
            endDate: {
                type: Date,
                default: null,
            },

            address: {
                type: Object,
                required: true
            },
            status: {
                type: String,
                default: 'active'
            }
    }
},
  {timestamps: true}
);

module.exports = mongoose.model('Cart', CartSchema);