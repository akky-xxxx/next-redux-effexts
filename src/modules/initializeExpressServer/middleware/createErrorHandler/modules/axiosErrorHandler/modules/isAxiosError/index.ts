// import node_modules
import { AxiosError } from "axios"

// main
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const isAxiosError = (err: any): err is AxiosError => {
  if (typeof err !== "object") return false
  return typeof err.isAxiosError === "boolean" && err.isAxiosError
}
