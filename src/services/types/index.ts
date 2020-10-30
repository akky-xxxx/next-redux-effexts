export type Api2client<T, U> = (apiResponse: T) => U

export type ServiceInformation = Record<"serviceName" | "endpoint", string>
