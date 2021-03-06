var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    sex: {type: String, required: true},
    family: {type: String, required: true},
    size: {type: String, required: true},
    item: {type: String, required: true}
});

module.exports = mongoose.model('Product', schema);