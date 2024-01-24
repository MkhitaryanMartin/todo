const ItemModel = require("../models/item.js");


class TodoService {
    async getItems() {
        const items = await ItemModel.find();

        return items;
    }
    async createItem(item) {
        const newItem = new ItemModel(item);
        const result = await newItem.save()
        return result
    }
    async editeItem(id, newTask) {

        const item = await ItemModel.updateOne({_id:id }, { $set: newTask});
        const result = await ItemModel.findById(id)
    
        return result
    }
    async deleteItem(id) {
        const item = await ItemModel.deleteOne({_id:id})
        const list = await ItemModel.find()

        return list
    }

}

module.exports = new TodoService()