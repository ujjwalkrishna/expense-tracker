const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please Add Some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add some amount']
    }
})

module.exports = mongoose.model('Transaction', transactionSchema);