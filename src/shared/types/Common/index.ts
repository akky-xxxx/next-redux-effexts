export type AnyObject = Record<string, unknown>

/**
 * @typedef EmptyObject
 * @description {} の代替型
 */
export type EmptyObject = Record<never, never>

export type ServiceStatusResponse = {
  status?: number
}

/**
 * @typedef AnyFunction
 * @description 仮実装用
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any

/**
 * @typedef NoArgVoidFunction
 * @description 引数なし、戻り値なし
 */
export type NoArgVoidFunction = () => EmptyObject

/**
 * @typedef ThisError
 * @description bff が client に返すエラー形式
 */
export type ThisError = {
  message: string
  code?: string
  status: number
  statusText: string
  request: {
    headers: AnyObject
  }
  response: {
    headers: AnyObject
    data: AnyObject
  }
}
