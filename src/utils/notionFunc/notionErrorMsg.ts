import { isNotionClientError, ClientErrorCode, APIErrorCode } from '@notionhq/client'

export const defineNotionError = (error: unknown, message: string) => {
  if (isNotionClientError(error)) {
    switch (error.code) {
      case ClientErrorCode.RequestTimeout:
        message = 'Timeout Error'
        break
      case APIErrorCode.ObjectNotFound:
        message = 'ObjectNotFound'
        break
      case APIErrorCode.Unauthorized:
        message = 'Unauthorized'
        break
      default:
        message = `Unknown error by ${error.code}`
        break
    }
  }
  return message
}
