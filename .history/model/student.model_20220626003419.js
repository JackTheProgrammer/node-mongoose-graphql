const mongoose = require('mongoose');
const Post = mongoose.Schema;
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
        required: true
    }
}, {
    collection: 'post'
});

module.exports = mongoose.model('post', postSchema)