// import node_modules
import express from "express"
import next from "next"
import Routes from "next-routes"

// import others
import { Common } from "../../shared/const/server/Common"

// main
const { PORT } = Common
const routes = new Routes()
const app = express()
const dev = process.env.NODE_ENV !== "production"
const nextApp = next({
  dev,
})

const handler = routes.getRequestHandler(nextApp)
nextApp.prepare().then(() => {
  app.use(handler)
  app.listen(PORT)
})
