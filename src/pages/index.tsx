// import node_modules
import React, { useEffect } from "react"
import { NextPage } from "next"
import { useRouter } from "next/router"

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
  const router = useRouter()

  useEffect(() => {
    if (todoItems.asyncInfo.status === 403) {
      router.replace("/error/403", router.pathname)
    }
  })

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
