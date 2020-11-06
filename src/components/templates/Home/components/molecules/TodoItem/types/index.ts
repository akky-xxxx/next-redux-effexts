// import
import { NoArgVoidFunction } from "../../../../../../../shared/types/Common"

// main
export type TodoItemProps = {
  id: string
  title: string
  description: string
  isDone: boolean
  handleUpdateTodoItemsId: NoArgVoidFunction
}
