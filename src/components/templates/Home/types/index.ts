// import
import { RootState } from "../../../../store"
import { AnyFunction } from "../../../../shared/types/Common"
import { UpdateTodoItemsIdArgs } from "../../../../store/reducers/todoItemsId"

// main
type State = Pick<RootState, "todoItems" | "todoItemsId">

export type HandleUpdateTodoItemsId = (args: UpdateTodoItemsIdArgs) => void

type Handlers = {
  // TODO: 仮実装
  handleReadTodoItems: AnyFunction
  handleUpdateTodoItemsId: HandleUpdateTodoItemsId
}

export type HomeProps = State & Handlers
