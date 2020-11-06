// import node_modules
import { ErrorRequestHandler } from "express"

// main
export type ErrorHandlerPair = [
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (error: any) => boolean,
  ErrorRequestHandler,
]

export type ErrorPayload = {
  handler: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [k: string]: any
}
