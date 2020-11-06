// import node_modules
import { AxiosError } from "axios"

// main
export const createAxiosError = (err: AxiosError) => {
  const { message, code, response } = err

  return {
    message,
    code,
    status: response?.status || 500,
    statusText: response?.statusText,
    request: {
      headers: response?.headers,
    },
    response: {
      headers: response?.headers,
      data: response?.data,
    },
  } as const
}
