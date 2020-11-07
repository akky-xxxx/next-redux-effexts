// import node_modules
import React, { FC, Fragment } from "react"
import styled from "styled-components"

// import others
import { TodoItemProps } from "./types"
import { useTodoItem } from "./modules/useTodoItem"

// main
export const TodoItem: FC<TodoItemProps> = (props) => {
  const {
    id,
    title,
    description,
    isDone,
    handleChangeId,
    handleChangeTitle,
    handleChangeDescription,
    handleChangeIsDone,
    handleUpdateTodoItemsId,
  } = useTodoItem(props)

  return (
    <Fragment>
      <ul>
        <li>
          <IndexInputWrapper>
            <Index>id:</Index>
            <input type="text" value={id} onChange={handleChangeId} />
          </IndexInputWrapper>
        </li>
        <li>
          <IndexInputWrapper>
            <Index>title:</Index>
            <input type="text" value={title} onChange={handleChangeTitle} />
          </IndexInputWrapper>
        </li>
        <li>
          <IndexInputWrapper>
            <Index>description:</Index>
            <input
              type="text"
              value={description}
              onChange={handleChangeDescription}
            />
          </IndexInputWrapper>
        </li>
        <li>
          <IndexInputWrapper>
            <Index>isDone:</Index>
            <input
              type="checkbox"
              checked={isDone}
              onChange={handleChangeIsDone}
            />
          </IndexInputWrapper>
        </li>
      </ul>
      <div>
        <button type="button" onClick={handleUpdateTodoItemsId}>
          保存
        </button>
      </div>
    </Fragment>
  )
}

const IndexInputWrapper = styled.label`
  align-items: center;
  display: inline-flex;
`

const Index = styled.span`
  flex-basis: 120px;
  flex-shrink: 0;
`
