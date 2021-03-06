// import node_modules
import express, { Express } from "express"
import Server from "next/dist/next-server/server/next-server"
import Routes from "next-routes"

// import middleware
import { apiAggregation } from "../../services"
import { createErrorHandler } from "./middleware/createErrorHandler"

// import others
import { createLogger } from "../../shared/utils/createLogger"

// main
const logger = createLogger(__filename)
const routes = new Routes()
const expressServer = express()

type InitializeExpressServer = (nextServer: Server) => Express
export const initializeExpressServer: InitializeExpressServer = (
  nextServer,
) => {
  logger.trace("start")
  const handler = routes.getRequestHandler(nextServer)

  expressServer.use(express.json())
  expressServer.use(apiAggregation)
  expressServer.use(handler)

  expressServer.use(createErrorHandler())

  logger.trace("done")
  return expressServer
}
