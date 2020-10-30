export type StateWithService<T> = {
  data: T | null
  asyncInfo: {
    isLoading: boolean
    errorMessage: string
  }
}
