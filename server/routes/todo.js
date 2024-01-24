const Router = require("express");
const TodoController = require("../controllers/todo-controller.js");


const router = new Router();

router.get("/get/items",  TodoController.getItems);
router.post("/create/item", TodoController.createItem );
router.delete("/delete/item/:id", TodoController.deleteItem );
router.patch('/edit/item/:id', TodoController.editeItem);


module.exports = router