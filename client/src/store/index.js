import { configureStore, combineReducers } from "@reduxjs/toolkit";
import reducers from "./exports"


const rootReducer = combineReducers(reducers)

const store = configureStore({
   reducer : rootReducer
})

export default store;