// import
import { ErrorHandlerPair, ErrorPayload } from "../../types"
import { createLogger } from "../../../../../../shared/utils/createLogger"
import { HandlerName, Message } from "../../const"

// main
const logger = createLogger(__filename)
const { UNEXPECTED } = HandlerName
const { UN_HANDLING } = Message
type UnexpectedError = Record<"stack" | "name" | "message", string>

export const unexpectedErrorHandler: ErrorHandlerPair = [
  () => true,
  (err, _req, res) => {
    const error: UnexpectedError =
      err instanceof Error
        ? {
            stack: err.stack,
            name: err.name,
            message: err.message,
          }
        : err
    const payload: ErrorPayload = {
      ...error,
      handler: UNEXPECTED,
      extendMessage: UN_HANDLING,
    }
    logger.error(payload)

    res.status(500)
    res.send(payload).json()
  },
]
