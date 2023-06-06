declare namespace Saga {
  import { Action } from 'redux'

  interface ReturnState extends Action {
    payload: {
      pageKey?: string
      type?: string
    }
  }
  interface RequestPayload {
    type?: string
  }

  interface SuccessPayload {
    payload: Array<T>[] | Array[] | object
  }

  interface FailurePayload {
    errors: Errors
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
  type SagaState = ReturnState
}
