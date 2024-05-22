const {Schema, model, ObjectId} = require("mongoose")

const Document = new Schema({
    code: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    numOfPages: {type: Number, default: 0},
    numOfAttachments: {type: Number, default: 0},
    numOfSections: {type: Number, default: 0},
    parent_id: {type: ObjectId, ref: 'Collection'},
    user_id: {type: ObjectId, ref: 'User'},
})

module.exports = model('Document', Document)