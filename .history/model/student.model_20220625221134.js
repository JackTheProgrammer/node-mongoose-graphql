const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let PostSchema = new Schema({
    authorName: {
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
        type: String,
        default: "A new Post"
    }
}, {
    collection: 'post'
});
module.exports = mongoose.model('post', PostSchema)