// export interface GetDatabaseRequestPayload {
//   id: UserGlobal.Profile['id']
// }

// export interface GetDatabaseSuccessPayload {
//   profile: object
// }

// export interface GetDatabaseFailurePayload {
//   errors: Errors
// }

// export type Payload = GetDatabaseRequestPayload | GetDatabaseSuccessPayload | GetDatabaseFailurePayload

export type Payload = string | object | boolean

// export const getDatabaseRequest = (payload) => ({
//   type: actionTypes.GET_DATABASE_REQUEST,
//   payload,
// })

// export const getDatabaseSuccess = (payload) => ({
//   type: actionTypes.GET_DATABASE_SUCCESS,
//   payload,
// })

// export const getDatabaseFailure = (errors) => ({
//   type: actionTypes.GET_DATABASE_FAILURE,
//   errors,
// })

// export const resetGetProductInfo = () => ({
//   type: actionTypes.RESET_GET_DATABASE,
// })
