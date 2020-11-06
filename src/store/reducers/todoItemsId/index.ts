// import node_modules
import { createSlice } from "@reduxjs/toolkit"
import { steps } from "redux-effects-steps"
import { specterUpdate } from "@specter/redux-effects-specter"

// import others
import { Service } from "../../../shared/const/Service"
import { StateWithService, ErrorAction } from "../../types"

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
    failureUpdate: (state, action: ErrorAction) => {
      const {
        payload: { response },
      } = action
      const errorMessage = response
        ? `${response.status}：${response.data.message}`
        : "Internal Server Error."

      return {
        ...state,
        status: response?.status || 500,
        asyncInfo: {
          isLoading: false,
          errorMessage,
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
