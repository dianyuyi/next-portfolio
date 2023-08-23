declare namespace Saga {
  import { Action } from 'redux'

  interface RequestPayload {
    type?: string
    pageKey?: string
  }

  interface SuccessPayload {
    payload: Array<T>[] | Array[] | object
  }

  interface FailurePayload {
    errors: string | undefined
  }

  interface RequestAction {
    type: string
    payload: RequestPayload
  }
  interface SuccessAction {
    type: string
    payload: SuccessPayload
  }
  interface FailureAction {
    type: string
    payload: FailurePayload
  }

  interface ResetAction {
    type: string
  }

  type Payload = RequestPayload | SuccessPayload | FailurePayload
  type Action = RequestAction | SuccessAction | FailureAction
}
