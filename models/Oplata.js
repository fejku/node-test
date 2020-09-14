const mongoose = require('mongoose');

const OplataSchema = mongoose.Schema({
    nazwa: {
        type: String,
        required: true,
    },
    kwota: {
        type: Number,
    },
    data_kolejnej_oplaty: {
        type: Date,
    },
    historyczne_oplaty: {
        type: Array,
        default: [],
    }
});

module.exports = mongoose.model('Oplaty', OplataSchema);