const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let postSchema = new Schema({
    name: {
        type: String,
        require: True
    },
    email: {
        type: String,
        require: True
    },
    title: string,
    description: {
        type: String,
        default: "A new Post"
    }
}, {
    collection: 'post'
});

module.exports = mongoose.model('post', postSchema)