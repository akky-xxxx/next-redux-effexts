import express from "express"
import next from "next"
import Routes from "next-routes"

const routes = new Routes()
const app = express()
const dev = process.env.NODE_ENV !== "production"
const nextApp = next({
  dev,
})

const handler = routes.getRequestHandler(nextApp)
nextApp.prepare().then(() => {
  app.use(handler)
  app.listen(3000)
})
