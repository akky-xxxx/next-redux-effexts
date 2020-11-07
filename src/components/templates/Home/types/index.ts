// import
import { RootState } from "../../../../store"
import { AnyFunction } from "../../../../shared/types/Common"

// main
type State = Pick<RootState, "todoItems">

type Handlers = {
  // TODO: 仮実装
  handleReadTodoItems: AnyFunction
  handleUpdateTodoItemsId: AnyFunction
}

export type HomeProps = State & Handlers
