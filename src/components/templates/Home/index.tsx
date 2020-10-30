// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// import others
import { AnyObject } from "../../../shared/types/Common"

// main
const data: AnyObject[] = [
  {
    id: "1",
    text: "text1",
  },
  {
    id: "2",
    text: "text2",
  },
]

// main
export const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {data.map((item) => {
          const { id, text } = item
          if (typeof id !== "string" || typeof text !== "string") return null
          return <StyledLi key={id}>{text}</StyledLi>
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
