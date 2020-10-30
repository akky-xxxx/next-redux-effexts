// import node_modules
import { PUT, APIDef, ResponseDef, Success200 } from "@agreed/typed"

// types
import { AnyObject } from "../../../../../../../src/shared/types/common"

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
  ["api", "todo-items", ":id"],
  AnyObject,
  AnyObject,
  Param,
  AnyObject,
  ResponseDef<Success200, AnyObject>
>
