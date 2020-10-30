// import node_modules
import React from "react"
import { NextPage } from "next"

// import others
import { Home } from "../components/templates/Home"
import { wrapper, RootState } from "../store"
import { readTodoItems } from "../store/reducers/todoItems"
import { CreateInitialStateAtHoc } from "../shared/types/client/common"

// main
type HomeHocProps = CreateInitialStateAtHoc<Pick<RootState, "todoItems">>

const HomeHoc: NextPage<HomeHocProps> = (hocProps) => {
  const {
    initialState: { todoItems },
  } = hocProps
  const pageProps = {
    todoItems,
  }

  return <Home {...pageProps} />
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const {
      store: { dispatch },
    } = context

    await dispatch(readTodoItems())
  },
)
export default HomeHoc
