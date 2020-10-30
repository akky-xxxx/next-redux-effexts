// import node_modules
import { combineReducers } from "@reduxjs/toolkit"

// import reducers
import { reducer as todoItems } from "./todoItems"

export const reducer = combineReducers({
  todoItems,
})
