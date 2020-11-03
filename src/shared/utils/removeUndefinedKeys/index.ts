// import
import { AnyObject } from "../../types/Common"

/**
 * @description 値がundefinedのキーを削除
 * @param obj
 */
export const removeUndefinedKeys = (obj: AnyObject) =>
  Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined),
  )
