import $api from "../../http"
export default class TodoService{

    static async getItems(){
        return $api.get("/get/items")
    }

    static async editItem(id, item){
      return $api.patch(`/edit/item/${id}`, item)
  }
    static async createItem(item){
        return $api.post("/create/item", item)
    }
    static async deleteItem(id){
        return $api.delete(`/delete/item/${id}`)
    }
}