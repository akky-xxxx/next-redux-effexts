// import node_modules
import { GET, APIDef, ResponseDef, Success200 } from "@agreed/typed"

// types
import { AgreedConverter } from "../../../../types"
import { AnyObject } from "../../../../../../src/shared/types/Common"
import { TodoItem } from "../../../../../../src/shared/types/server/TodoItem"

// main
/**
 * @typedef Data
 * @description データ
 */
export type Data = {
  todo_items: TodoItem[] // eslint-disable-line camelcase
}

/**
 * @typedef ResponseSuccess
 * @description 正常パターンのレスポンス
 * @property data - データ
 */
export type ResponseSuccess = {
  data: Data
}

/**
 * @typedef Api
 * @description api 定義
 */
export type Api = APIDef<
  GET,
  ["api", "todo-items"],
  AnyObject,
  AnyObject,
  undefined,
  AnyObject,
  ResponseDef<Success200, AgreedConverter<ResponseSuccess>>
>
