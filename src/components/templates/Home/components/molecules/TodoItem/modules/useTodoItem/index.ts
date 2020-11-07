// import node_modules
import { useState, useCallback, ChangeEvent } from "react"

// import
import { TodoItemProps } from "../../types"
import { NoArgVoidFunction } from "../../../../../../../../shared/types/Common"

// main
type HandleChange = (event: ChangeEvent<HTMLInputElement>) => void
type Handler =
  | "handleChangeId"
  | "handleChangeTitle"
  | "handleChangeDescription"
  | "handleChangeIsDone"
type UseTodoItemArgs = Omit<TodoItemProps, "handleUpdateTodoItemsId">
type UseTodoItem = (
  args: TodoItemProps,
) => UseTodoItemArgs &
  Record<Handler, HandleChange> & {
    handleUpdateTodoItemsId: NoArgVoidFunction
  }
export const useTodoItem: UseTodoItem = (args) => {
  const { handleUpdateTodoItemsId: _handleUpdateTodoItemsId } = args
  const [state, setState] = useState<UseTodoItemArgs>(args)
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

  const handleUpdateTodoItemsId: () => void = useCallback(() => {
    _handleUpdateTodoItemsId({ id, title, description, isDone })
  }, [id, title, description, isDone])

  return {
    id,
    title,
    description,
    isDone,
    handleChangeId,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeIsDone,
    handleUpdateTodoItemsId,
  }
}
