// import node_modules
import { ErrorRequestHandler } from "express"

// import error handlers
import { axiosErrorHandler } from "./modules/axiosErrorHandler"
import { unexpectedErrorHandler } from "./modules/unexpectedErrorHandler"

// import others
import { ErrorHandlerPair } from "./types"

// main
type PatternMatcher = (...patterns: ErrorHandlerPair[]) => ErrorRequestHandler

const patternMatcher: PatternMatcher = (...patterns) => {
  const errorRequestHandler: ErrorRequestHandler = (err, req, res, next) => {
    const patternsLength = patterns.length
    for (let index = 0; index < patternsLength; index += 1) {
      const [isAnyError, errorHandler] = patterns[index]
      if (isAnyError(err)) {
        return errorHandler(err, req, res, next)
      }
    }
    return next(err)
  }
  return errorRequestHandler
}

export const createErrorHandler = (): ErrorRequestHandler =>
  patternMatcher(axiosErrorHandler, unexpectedErrorHandler)
