const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let PostSchema = new Schema({
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
    },
    description: {
        type
    }
}, {
    collection: 'post'
});
module.exports = mongoose.model('post', PostSchema)