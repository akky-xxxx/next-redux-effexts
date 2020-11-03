import { removeUndefinedKeys } from "../index"

test("値がundefinedのキーを削除", () => {
  const data = {
    foo: null,
    bar: undefined,
    baz: "test",
  }

  const expected = {
    foo: null,
    baz: "test",
  }

  expect(removeUndefinedKeys(data)).toStrictEqual(expected)
})
