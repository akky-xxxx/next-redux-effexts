// import node_modules
import { createSlice } from "@reduxjs/toolkit"
import { steps } from "redux-effects-steps"
import { specterUpdate } from "@specter/redux-effects-specter"

// import others
import { Service } from "../../../shared/const/Service"
import { StateWithService, ErrorPayload } from "../../types"

// main
const { TODO_ITEMS_ID } = Service

export const initialState: StateWithService = {
  asyncInfo: {
    isLoading: false,
    errorMessage: "",
  },
}

const slice = createSlice({
  name: "todoItemsId",
  initialState,
  reducers: {
    updateReady: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: true,
          errorMessage: "",
        },
      }
    },
    successUpdate: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: false,
          errorMessage: "",
        },
      }
    },
    failureUpdate: (state, action: { payload: ErrorPayload }) => {
      const {
        payload: { status, message },
      } = action

      return {
        ...state,
        status,
        asyncInfo: {
          isLoading: false,
          errorMessage: message,
        },
      }
    },
  },
})

const {
  actions: { updateReady, successUpdate, failureUpdate },
  reducer,
} = slice

const updateTodoItemsId = (): ReturnType<typeof steps> => {
  return steps(updateReady(), specterUpdate(TODO_ITEMS_ID), [
    successUpdate,
    failureUpdate,
  ])
}

export { reducer, updateTodoItemsId }
