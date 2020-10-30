// import node_modules
import next from "next"

// import others
import { Common } from "../../shared/const/Common"
import { Server } from "../../shared/const/Server"
import { initializeExpressServer } from "../../modules/initializeExpressServer"

// main
const { IS_DEV } = Common
const { PORT } = Server
const nextApp = next({
  dev: IS_DEV,
})
const expressServer = initializeExpressServer(nextApp)

nextApp.prepare().then(() => {
  expressServer.listen(PORT)
})
