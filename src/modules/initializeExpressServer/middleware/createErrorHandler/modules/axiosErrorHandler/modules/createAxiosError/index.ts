// import node_modules
import { AxiosError } from "axios"

// import others
import { ThisError } from "../../../../../../../../shared/types/Common"

// main
type CreateAxiosError = (err: AxiosError) => ThisError
export const createAxiosError: CreateAxiosError = (err: AxiosError) => {
  const { message, code, response } = err

  return {
    message,
    code,
    status: response?.status || 500,
    statusText: response?.statusText || "Internal Server Error.",
    request: {
      headers: response?.headers,
    },
    response: {
      headers: response?.headers,
      data: response?.data,
    },
  } as const
}
