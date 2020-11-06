// import
import { RootState } from "../../../../store"
import { AnyFunction } from "../../../../shared/types/Common"

// main
type State = Pick<RootState, "todoItems">

type Handlers = {
  // TODO: 仮実装
  handleUpdateTodoItemsId: AnyFunction
}

export type HomeProps = State & Handlers
