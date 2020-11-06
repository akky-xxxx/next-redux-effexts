// import node_modules
import React from "react"
import { NextPage } from "next"

// import others
import { Home } from "../components/templates/Home"
import { wrapper, useSelector, useDispatch } from "../store"
import { readTodoItems } from "../store/reducers/todoItems"
import { updateTodoItemsId } from "../store/reducers/todoItemsId"
import { redirectAtServerSideProps } from "../modules/redirectAtServerSideProps"
import { HomeProps } from "../components/templates/Home/types"

// main
const HomeHoc: NextPage = () => {
  const todoItems = useSelector((state) => state.todoItems)
  const dispatch = useDispatch()
  const pageProps: HomeProps = {
    todoItems,
    handleUpdateTodoItemsId: () => dispatch(updateTodoItemsId()),
  }

  return <Home {...pageProps} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch, getState },
      res,
    } = context

    await dispatch(readTodoItems())
    redirectAtServerSideProps(res, getState().todoItems)
  },
)

export default HomeHoc
