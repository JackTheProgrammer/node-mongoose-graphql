const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Po = new Schema({
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
    collection: 'students'
});
module.exports = mongoose.model('StudentSchema', studentSchema)