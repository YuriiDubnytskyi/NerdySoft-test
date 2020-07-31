const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:String,
    description:String,
    date:Number,
    similar:Array
},{
    collection:"NerdySoftPost"
})

module.exports = mongoose.model('Posts', postSchema);