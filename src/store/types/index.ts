// import
import { ServiceStatusResponse } from "../../shared/types/Common"

// main
export type StateWithService<T> = {
  data: T | null
  asyncInfo: {
    isLoading: boolean
    errorMessage: string
  }
} & ServiceStatusResponse

export type ErrorPayload = {
  message: string
} & Required<ServiceStatusResponse>
