const {Schema, model, ObjectId} = require("mongoose")

const Attachment = new Schema({
    code: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    parent_id: {type: ObjectId, ref: 'Document'},
    user_id: {type: ObjectId, ref: 'User'}
})

module.exports = model('Attachment', Attachment)