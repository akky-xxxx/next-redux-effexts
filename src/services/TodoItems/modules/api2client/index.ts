// import
import { ApiResponse, ServiceResponse } from "../../types"
import { Api2client } from "../../../types"
import { converter } from "./modules/converter"

// main
export const api2client: Api2client<ApiResponse, ServiceResponse> = (
  apiResponse,
) => {
  const { data } = apiResponse
  return {
    todoItems: data.todo_items.map(converter),
  }
}
