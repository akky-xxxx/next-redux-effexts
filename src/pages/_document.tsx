/**
 * import node_modules
 */
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document"
import { ServerStyleSheet as StyledComponentSheets } from "styled-components"
import React, { Fragment } from "react"

/**
 * main
 */
export default class MyDocument extends Document {
  static async getInitialProps(context: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()
    const originalRenderPage = context.renderPage
    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => {
            const { Component, router, pageProps } = props
            return styledComponentSheet.collectStyles(
              <App
                Component={Component}
                router={router}
                pageProps={pageProps}
              />,
            )
          },
        })
      const initialProps = await Document.getInitialProps(context)
      return {
        ...initialProps,
        styles: (
          <Fragment>
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </Fragment>
        ),
      }
    } finally {
      styledComponentSheet.seal()
    }
  }

  render() {
    return (
      <Html lang="ja">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
