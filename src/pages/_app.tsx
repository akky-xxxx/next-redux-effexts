/**
 * import node_modules
 */
import { AppProps } from "next/app"
import Head from "next/head"
import React, { Fragment, FC } from "react"
import { Provider, useStore } from "react-redux"

/**
 * import others
 */
import { wrapper } from "../store"

/**
 * main
 */
const MyApp: FC<AppProps> = (props) => {
  const { Component, pageProps } = props
  const store = useStore()

  const thisPageProps = {
    ...pageProps,
    ...store.getState(),
  }

  return (
    <Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
        />
        <title>next.js</title>
      </Head>
      <Provider store={store}>
        <Component {...thisPageProps} />
      </Provider>
    </Fragment>
  )
}

export default wrapper.withRedux(MyApp)
