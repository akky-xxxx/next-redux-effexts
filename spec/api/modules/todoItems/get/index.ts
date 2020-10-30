// import
import { Api } from "./types"
import { successData } from "./sampleData"

// main
export const todoItemsGet: Api[] = [
  {
    title: "TODO 一覧取得 - 正常",
    request: {
      path: ["api", "todo-items"],
      method: "GET",
      body: undefined,
      query: {},
    },
    response: {
      status: 200,
      body: {
        data: "{:data}",
      },
      values: successData,
    },
  },
]
