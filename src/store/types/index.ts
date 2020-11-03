// import
import { ServiceStatusResponse, AnyObject } from "../../shared/types/Common"

// main
type AsyncInfo = {
  asyncInfo: {
    isLoading: boolean
    errorMessage: string
  }
}

export type StateWithService<T = undefined> = ServiceStatusResponse &
  AsyncInfo &
  (T extends undefined ? AnyObject : { data: T | null })

export type ErrorPayload = {
  message: string
} & Required<ServiceStatusResponse>
