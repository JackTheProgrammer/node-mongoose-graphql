const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let PostSchemea = new Schema({
    name: {
        type: String,
        require: True
    },
    email: {
        type: String,
        require: True
    },
    dob: {
        type: Date,
        default: Date.now(),
    }
}, {
    collection: 'post'
});
module.exports = mongoose.model('post', studentSchema)