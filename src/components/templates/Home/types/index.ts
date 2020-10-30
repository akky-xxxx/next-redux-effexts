// import
import { RootState, Dispatch } from "../../../../store"

// main
type State = Pick<RootState, "todoItems">
type Handlers = {
  handleGetTodoItems: () => Dispatch
}

export type HomeProps = State & Handlers
