const {Schema, model, ObjectId} = require("mongoose")

const Fund = new Schema({
    code: {type: String, required: true},
    name: {type: String, required: true},
    numOfCollections: {type: Number, default: 0},
    numOfDocuments: {type: Number, default: 0},
    parent_id: {type: ObjectId, ref: 'User'},
})

module.exports = model('Fund', Fund)