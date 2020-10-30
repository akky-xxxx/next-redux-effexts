// import node_modules
import log4js, { Logger } from "log4js"

// main
const src = "/src/"
type CreateLogger = (fileName: string) => Logger
export const createLogger: CreateLogger = (fileName) => {
  const thisFileName = fileName.slice(fileName.lastIndexOf(src) + src.length)
  const logger = log4js.getLogger(thisFileName)
  logger.level = "trace"

  return logger
}
