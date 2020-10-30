// import agreed
import { Placeholder } from "@agreed/typed"

// main
export type AgreedConverter<T> = {
  [K in keyof T]: Placeholder<T[K]> | AgreedConverter<T[K]>
}
