// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { ErrorMessage } from "../../atoms/ErrorMessage"
import { Spinner } from "../../molecules/Spinner"
import { TodoItem } from "./components/molecules/TodoItem"

// import others
import { HomeProps } from "./types"

// main
export const Home: FC<HomeProps> = (props) => {
  const { todoItems } = props

  return (
    <div>
      <ErrorMessage message={todoItems.asyncInfo.errorMessage} />
      <h1>Home</h1>
      <Spinner isShow={todoItems.asyncInfo.isLoading}>
        {todoItems.data && (
          <ul>
            {todoItems.data.todoItems.map((todoItem) => {
              const { id } = todoItem
              return (
                <StyledLi key={id}>
                  <TodoItem {...todoItem} />
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
