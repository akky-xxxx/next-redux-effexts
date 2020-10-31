// import node_modules
import React, { FC } from "react"
import styled from "styled-components"

// main
type ErrorMessageProps = {
  message: string
}

export const ErrorMessage: FC<ErrorMessageProps> = (props) => {
  const { message } = props

  if (!message) return null

  return <StyledDiv>{message}</StyledDiv>
}

const StyledDiv = styled.div`
  background-color: #fee;
  border: red 1px solid;
  border-radius: 5px;
  color: red;
  padding: 10px;
`
