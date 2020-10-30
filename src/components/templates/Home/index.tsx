// import node_modules
import React, { FC, useEffect } from "react"
import styled from "styled-components"

// import others
import { HomeProps } from "./types"

// main
export const Home: FC<HomeProps> = (props) => {
  const { todoItems, handleGetTodoItems } = props

  useEffect(() => {
    if (!todoItems.data) handleGetTodoItems()
  }, [todoItems.data])

  if (!todoItems.data) return null

  return (
    <div>
      <h1>Home</h1>
      <ul>
        {todoItems.data.todoItems.map((todoItem) => {
          const { id, title } = todoItem
          return <StyledLi key={id}>{title}</StyledLi>
        })}
      </ul>
    </div>
  )
}

const StyledLi = styled.li`
  & + & {
    margin-top: 10px;
  }
`
