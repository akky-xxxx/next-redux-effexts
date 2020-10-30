// import
import { RootState } from "../../../../store"

// main
type State = Pick<RootState, "todoItems">
// TODO: 仮実装
// eslint-disable-next-line @typescript-eslint/ban-types
type Handlers = {}

export type HomeProps = State & Handlers
