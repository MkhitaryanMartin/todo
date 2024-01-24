const TodoService = require("../services/todo-service")

class TodoController{

    async getItems(req, res, next){
        try {
            const items = await TodoService.getItems()
            return res.json(items)
        } catch (error) {
            return res.status(500).json("Error")
        }
    }
    async createItem(req, res, next){
        try {
            const  item = req.body
            const newItem = await TodoService.createItem(item)
            return res.json(newItem)
        } catch (error) {
            return res.status(500).json("Error")
        }
    }
    async editeItem(req, res, next){
        try {
            const id = req.params.id;
            const newTask = req.body;
            console.log(id, newTask)
            const item = await TodoService.editeItem(id, newTask)
            return res.json(item)
        } catch (error) {
            return res.status(500).json("Error")
        }
    }
    async deleteItem(req, res, next){
        try {
            const id = req.params.id;
            const list = await TodoService.deleteItem(id)
            return res.json(list)
        } catch (error) {
            return res.status(500).json("Error")
        }
    }
}

module.exports = new TodoController()