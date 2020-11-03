// import node_modules
import { useState, useCallback, ChangeEvent } from "react"

// import
import { TodoItemProps } from "../../types"

// main
type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void
type Handler =
  | "handleChangeId"
  | "handleChangeTitle"
  | "handleChangeDescription"
  | "handleChangeIsDone"
type UseTodoItem = (
  args: TodoItemProps,
) => TodoItemProps & Record<Handler, HandleChange>
export const useTodoItem: UseTodoItem = (args) => {
  const [state, setState] = useState<TodoItemProps>(args)
  const { id, title, description, isDone } = state
  const handleChangeId: HandleChange = useCallback(
    (event) => {
      const {
        target: { value },
      } = event
      setState({
        ...state,
        id: value,
      })
    },
    [title, description, isDone],
  )
  const handleChangeTitle: HandleChange = useCallback(
    (event) => {
      const {
        target: { value },
      } = event
      setState({
        ...state,
        title: value,
      })
    },
    [id, title, description, isDone],
  )
  const handleChangeDescription: HandleChange = useCallback(
    (event) => {
      const {
        target: { value },
      } = event
      setState({
        ...state,
        description: value,
      })
    },
    [id, title, isDone],
  )
  const handleChangeIsDone: HandleChange = useCallback(() => {
    setState({
      ...state,
      isDone: !state.isDone,
    })
  }, [id, title, description])

  return {
    id,
    title,
    description,
    isDone,
    handleChangeId,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeIsDone,
  }
}
