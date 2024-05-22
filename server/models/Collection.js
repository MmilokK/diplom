const {Schema, model, ObjectId} = require("mongoose")

const Collection = new Schema({
    code: {type: String, required: true},
    type: {type: String, required: true},
    description: {type: String, required: true},
    name: {type: String, required: true},
    numOfDocuments: {type: Number, default: 0},
    numOfPages: {type: Number, default: 0},
    parent_id: {type: ObjectId, ref: 'Fund'},
    user_id: {type: ObjectId, ref: 'User'},
})

module.exports = model('Collection', Collection)