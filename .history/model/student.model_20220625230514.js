const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let postSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    title: { type: String, required: true },
    description: {
        type: String,
        required: "A new Post"
    }
}, {
    collection: 'post'
});

module.exports = mongoose.model('post', postSchema)