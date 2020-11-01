// import node_modules
import { AnyAction, combineReducers } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

// import reducers
import {
  reducer as todoItemsReducer,
  initialState as todoItemsInitialState,
} from "./todoItems"

const initialState = {
  todoItems: todoItemsInitialState,
}

export const combinedReducer = combineReducers({
  todoItems: todoItemsReducer,
})

type CombinedReducer = ReturnType<typeof combinedReducer>

export const reducer = (
  state: CombinedReducer = initialState,
  action: AnyAction,
): CombinedReducer => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }

  return combinedReducer(state, action)
}
