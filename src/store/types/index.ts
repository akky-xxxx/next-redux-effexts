export type StateWithService<T> = {
  data: T | null
  asyncInfo: {
    isLoading: boolean
    errorMessage: string
    status?: number
  }
}

export type ErrorPayload = {
  status?: number
  message: string
}
