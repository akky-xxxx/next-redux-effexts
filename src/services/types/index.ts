// import
import { ServiceStatusResponse } from "../../shared/types/Common"

// main
export type Api2client<T, U> = (apiResponse: T) => U

export type ServiceInformation = Record<"serviceName" | "endpoint", string>

export type ServiceErrorResponse = {
  message: string
} & Required<ServiceStatusResponse>
