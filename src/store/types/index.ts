import { AxiosError } from "axios"

// import others
import {
  ServiceStatusResponse,
  AnyObject,
  ThisError,
} from "../../shared/types/Common"

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

export type ErrorAction = {
  payload: AxiosError<ThisError>
}
