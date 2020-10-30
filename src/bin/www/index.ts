// import node_modules
import next from "next"

// import others
import { Common } from "../../shared/const/Common"
import { Server } from "../../shared/const/Server2"
import { initializeExpressServer } from "../../modules/initializeExpressServer"
import { createLogger } from "../../shared/utils/createLogger"

// main
const { IS_DEV } = Common
const { PORT } = Server

const logger = createLogger(__filename)
logger.debug({ IS_DEV, PORT })

const nextApp = next({
  dev: IS_DEV,
})
const expressServer = initializeExpressServer(nextApp)

nextApp.prepare().then(() => {
  expressServer.listen(PORT, () => {
    logger.info(`server listening on http://localhost:${PORT}/`)
  })
})
