declare namespace Store {
  interface RootState {
    server: Array[InitialState]
    client: Array[InitialState]
  }
  interface InitialState {
    response: Array[] | Array[object]
    isLoading: null | boolean
    errors: Global.Errors
  }
  interface ErrorState {
    object: string
    status: number
    code: string
    message: string
  }

  interface CollectResponse {
    response: Array[] | Array[object]
    currentId: string
  }

  type SliceResponse = object
}
