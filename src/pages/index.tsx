// import node_modules
import React from "react"
import { NextPage } from "next"

// import others
import { Home } from "../components/templates/Home"
import { wrapper, RootState } from "../store"
import { readTodoItems } from "../store/reducers/todoItems"
import { redirectAtServerSideProps } from "../modules/redirectAtServerSideProps"

// main
type HomeHocProps = Pick<RootState, "todoItems">

const HomeHoc: NextPage<HomeHocProps> = (hocProps) => {
  const { todoItems } = hocProps
  const pageProps = { todoItems }

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
