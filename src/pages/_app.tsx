/**
 * import node_modules
 */
import App, { AppInitialProps } from "next/app"
import Head from "next/head"
import React, { Fragment } from "react"
import { Provider } from "react-redux"

/**
 * import others
 */
import { store } from "../store"

/**
 * main
 */
class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props

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
          <Component {...pageProps} />
        </Provider>
      </Fragment>
    )
  }
}

export default MyApp
