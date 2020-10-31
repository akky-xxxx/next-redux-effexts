// import
import { TodoItem as ServerTodoItem } from "../../../../../../shared/types/server/TodoItem"
import { TodoItem as ClientTodoItem } from "../../../../../../shared/types/client/TodoItem"

// main
type Converter = (serverTodoItem: ServerTodoItem) => ClientTodoItem
export const converter: Converter = (serverTodoItem) => {
  const {
    id,
    title,
    description: _description,
    is_done: isDone,
  } = serverTodoItem
  const description = _description || ""
  return { id, title, description, isDone }
}
