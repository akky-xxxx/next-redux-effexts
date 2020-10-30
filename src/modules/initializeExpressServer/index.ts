// import node_modules
import express, { Express } from "express"
import Server from "next/dist/next-server/server/next-server"
import Routes from "next-routes"

// main
const routes = new Routes()
const expressServer = express()

type InitializeExpressServer = (nextServer: Server) => Express
export const initializeExpressServer: InitializeExpressServer = (
  nextServer,
) => {
  const handler = routes.getRequestHandler(nextServer)
  expressServer.use(handler)
  return expressServer
}
