// import node_modules
import { createSlice } from "@reduxjs/toolkit"
import { steps } from "redux-effects-steps"
import { specterRead } from "@specter/redux-effects-specter"

// import others
import { Service } from "../../../shared/const/Service"
import { StateWithService, ErrorAction } from "../../types"
import { ServiceResponse } from "../../../services/TodoItems/types"

// main
const { TODO_ITEMS } = Service

export const initialState: StateWithService<ServiceResponse> = {
  data: null,
  asyncInfo: {
    isLoading: false,
    errorMessage: "",
  },
}

const slice = createSlice({
  name: "todoItems",
  initialState,
  reducers: {
    readReady: (state) => {
      return {
        ...state,
        asyncInfo: {
          isLoading: true,
          errorMessage: "",
        },
      }
    },
    successRead: (state, action: { payload: ServiceResponse }) => {
      return {
        ...state,
        data: {
          ...action.payload,
        },
        asyncInfo: {
          isLoading: false,
          errorMessage: "",
        },
      }
    },
    failureRead: (state, action: ErrorAction) => {
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
  actions: { readReady, successRead, failureRead },
  reducer,
} = slice

const readTodoItems = (): ReturnType<typeof steps> => {
  return steps(readReady(), specterRead(TODO_ITEMS), [successRead, failureRead])
}

export { reducer, readTodoItems }
