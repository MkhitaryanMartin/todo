import { createAsyncThunk } from "@reduxjs/toolkit";
import TodoService from "../../components/service/TodoService";

export const fetchTodo = createAsyncThunk(
    "fetchTodo",
    async (_, thunkApi)=>{
        try {
            const response = await TodoService.getItems()
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const editItem= createAsyncThunk(
    "editTodo",
    async ({id, item}, thunkApi)=>{
        try {
            console.log(id,item)
            const response = await TodoService.editItem(id, item)
            return {data:response.data, id}
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)

export const createItem= createAsyncThunk(
    "createItem",
    async (item, thunkApi)=>{
        try {
            const response = await TodoService.createItem(item)
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)
export const deleteItem= createAsyncThunk(
    "deleteItem",
    async (id, thunkApi)=>{
        try {
            const response = await TodoService.deleteItem(id)
            return response.data
        } catch (e) {
            return thunkApi.rejectWithValue(e.message)
        }
    }
)