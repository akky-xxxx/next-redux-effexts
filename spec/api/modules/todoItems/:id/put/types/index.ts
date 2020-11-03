// import node_modules
import {
  PUT,
  APIDef,
  ResponseDef,
  Success200,
  Error403,
  Capture,
} from "@agreed/typed"

// types
import { AnyObject } from "../../../../../../../src/shared/types/Common"

// main
type Param = Partial<{
  title: string
  description: string
  is_done: boolean // eslint-disable-line camelcase
}>

/**
 * @typedef Api
 * @description api 定義
 */
export type Api = APIDef<
  PUT,
  ["api", "todo-items", Capture<string>],
  AnyObject,
  AnyObject,
  Param,
  AnyObject,
  | ResponseDef<Success200, AnyObject>
  | ResponseDef<Error403, { message: "Forbidden" }>
>
