// import node_modules
import { AxiosError } from "axios"

// import others
import { ErrorHandlerPair, ErrorPayload } from "../../types"
import { createLogger } from "../../../../../../shared/utils/createLogger"
import { isAxiosError } from "./modules/isAxiosError"
import { createAxiosError } from "./modules/createAxiosError"
import { HandlerName } from "../../const"

// main
const logger = createLogger(__filename)
const { AXIOS } = HandlerName

export const axiosErrorHandler: ErrorHandlerPair = [
  isAxiosError,
  (err: AxiosError, req, res) => {
    const error = createAxiosError(err)
    const { status } = error
    if (err.response && status >= 400) {
      const { ip, originalUrl, method, url } = req
      const payload: ErrorPayload = {
        error,
        handler: AXIOS,
        ip,
        originalUrl,
        method,
        url,
      }

      if (status >= 500) {
        logger.error(payload)
      } else if (status >= 400) {
        logger.warn(payload)
      }

      res.set(error.response.headers.err)
      res.status(status)
      res.send(error.response.data).json()
    }
  },
]
