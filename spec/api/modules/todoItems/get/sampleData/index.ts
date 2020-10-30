// import
import { ResponseSuccess } from "../types"

// main
export const successData: ResponseSuccess = {
  data: {
    todo_items: [
      {
        id: "728023dd-87ce-4fe9-967b-2a5a62626baf",
        title: "Todo item1 title.",
        description: "Todo item1 description.",
        is_done: true,
      },
      {
        id: "dbde0395-6308-496b-aedb-7d57ec88744c",
        title: "Todo item2 title.",
        description: "Todo item2 description.",
        is_done: false,
      },
      {
        id: "4f03e2c6-f639-4ba4-9155-6c2639f7b0ed",
        title: "Todo item3 title.",
        is_done: true,
      },
      {
        id: "8e037c43-8d31-4394-8e1b-4411079bc4c6",
        title: "Todo item4 title.",
        is_done: false,
      },
      {
        id: "dbde0395-6308-496b-aedb-7d57ec88744c",
        title: "Todo item5 title ".repeat(100).trim(),
        description: "Todo item5 description. ".repeat(100).trim(),
        is_done: true,
      },
      {
        id: "57de9441-1330-44d8-a50e-c80d27729df1",
        title: "Todo item6 title ".repeat(100).trim(),
        description: "Todo item6 description. ".repeat(100).trim(),
        is_done: false,
      },
    ],
  },
}
