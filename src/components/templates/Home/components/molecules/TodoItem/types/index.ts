// import
import { HandleUpdateTodoItemsId } from "../../../../types"

// main
export type TodoItemProps = {
  id: string
  title: string
  description: string
  isDone: boolean
  handleUpdateTodoItemsId: HandleUpdateTodoItemsId
}
