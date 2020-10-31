// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import components
import { ErrorMessage } from "../../atoms/ErrorMessage"
import { Spinner } from "../../molecules/Spinner"

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
              const { id, title } = todoItem
              return <StyledLi key={id}>{title}</StyledLi>
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
