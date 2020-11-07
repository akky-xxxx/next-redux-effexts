// import
import { HomeProps } from "../../types"

// main
export const useHome = (props: HomeProps) => {
  const { todoItems, todoItemsId } = props
  const errorMessage =
    todoItems.asyncInfo.errorMessage || todoItemsId.asyncInfo.errorMessage
  const isShowSpinner =
    todoItems.asyncInfo.isLoading || todoItemsId.asyncInfo.isLoading

  return { errorMessage, isShowSpinner }
}
