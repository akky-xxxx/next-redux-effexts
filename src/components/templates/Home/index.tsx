// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { ErrorMessage } from "../../atoms/ErrorMessage"
import { Spinner } from "../../molecules/Spinner"
import { Navigation } from "../../molecules/Navigation"
import { TodoItem } from "./components/molecules/TodoItem"

// import others
import { HomeProps } from "./types"

// main
export const Home: FC<HomeProps> = (props) => {
  const { todoItems, handleReadTodoItems, handleUpdateTodoItemsId } = props

  return (
    <div>
      <ErrorMessage message={todoItems.asyncInfo.errorMessage} />
      <h1>Home</h1>
      <Navigation />
      <div>
        <button type="button" onClick={handleReadTodoItems}>
          再読込
        </button>
      </div>
      <Spinner isShow={todoItems.asyncInfo.isLoading}>
        {todoItems.data && todoItems.data.todoItems && (
          <ul>
            {todoItems.data.todoItems.map((todoItem) => {
              const { id } = todoItem
              return (
                <StyledLi key={id}>
                  <TodoItem
                    {...todoItem}
                    handleUpdateTodoItemsId={handleUpdateTodoItemsId}
                  />
                </StyledLi>
              )
            })}
          </ul>
        )}
      </Spinner>
    </div>
  )
}

const StyledLi = styled.li`
  & + & {
    margin-top: 10px;
  }
`
