// import node_modules
import { v4 as uuid } from "uuid"

// import
import { ResponseSuccess } from "../types"

// main
type CreateSuccessData = (num?: number) => ResponseSuccess["data"]["todo_items"]
const createSuccessData: CreateSuccessData = (num) => {
  const createNum = num || 10

  return [...Array(createNum)].map((_, index) => {
    const itemIndex = index + 1
    const description =
      itemIndex % 3 === 0
        ? undefined
        : `Todo item${itemIndex} description.`.repeat(itemIndex)
    return {
      id: uuid(),
      title: `Todo item${itemIndex} title.`,
      description,
      is_done: itemIndex % 2 === 0,
    }
  })
}

export const successData: ResponseSuccess = {
  data: {
    todo_items: createSuccessData(),
  },
}
