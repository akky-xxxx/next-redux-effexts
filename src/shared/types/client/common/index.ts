/**
 * @typedef CreateInitialStateAtHoc
 * @description HOC で initial state を取得する際に NextPage<T> に指定する型を定義する
 */
export type CreateInitialStateAtHoc<T> = {
  initialState: T
}
