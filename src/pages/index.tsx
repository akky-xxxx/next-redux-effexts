// import node_modules
import React from "react"

// import others
import { Home } from "../components/templates/Home"
import { useDispatch, useSelector } from "../store"
import { readTodoItems } from "../store/reducers/todoItems"

const HomeHoc = () => {
  const todoItems = useSelector((thisState) => thisState.todoItems)
  const dispatch = useDispatch()
  const handleGetTodoItems = () => dispatch(readTodoItems())
  const props = {
    todoItems,
    handleGetTodoItems,
  }

  return <Home {...props} />
}

// main
export default HomeHoc
