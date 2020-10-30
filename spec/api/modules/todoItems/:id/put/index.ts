// import
import { Api } from "./types"

// main
export const todoItemsIdPut: Api[] = [
  {
    title: "TODO 更新 - 正常",
    request: {
      path: ["api", "todo-items", ":id"],
      method: "PUT",
      body: {},
      query: {},
    },
    response: {
      status: 200,
      body: {
        data: "{:data}",
      },
    },
  },
]
