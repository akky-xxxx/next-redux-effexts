// import node_modules
import { AnyAction, combineReducers } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper"

// import reducers
import {
  reducer as todoItemsReducer,
  initialState as todoItemsInitialState,
} from "./todoItems"
import {
  reducer as todoItemsIdReducer,
  initialState as todoItemsIdInitialState,
} from "./todoItemsId"

const initialState = {
  todoItems: todoItemsInitialState,
  todoItemsId: todoItemsIdInitialState,
}

export const combinedReducer = combineReducers({
  todoItems: todoItemsReducer,
  todoItemsId: todoItemsIdReducer,
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
