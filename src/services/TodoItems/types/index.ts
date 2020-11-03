// import
import { ResponseSuccess } from "../../../../spec/api/modules/todoItems/get/types"
import { TodoItem } from "../../../shared/types/client/TodoItem"
import { ServiceStatusResponse } from "../../../shared/types/Common"

// main
export type ApiResponse = ResponseSuccess
export type ServiceResponse = {
  todoItems: TodoItem[]
} & ServiceStatusResponse
