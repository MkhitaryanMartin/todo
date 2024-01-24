const { Schema, model } = require('mongoose');



const ItemSchema = new Schema({
  title: { type: String, required: true},
  task: { type: String, required: true },
 status: {type: String}
});

module.exports = model('Item', ItemSchema);
