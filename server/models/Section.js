const {Schema, model, ObjectId} = require("mongoose")

const Section = new Schema({
    code: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    numOfPages: {type: Number, default: 0},
    parent_id: {type: ObjectId, ref: 'Document'},
    user_id: {type: ObjectId, ref: 'User'}
})

module.exports = model('Section', Section)