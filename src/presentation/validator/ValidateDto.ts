import { HttpStatusCode } from '@/helpers/index'
import { HttpException } from '@/utils/index'
import { validate, ValidationError } from 'class-validator'

export class ValidateDto {
  static async isValid(object: object) {
    const hasErrors = await validate(object)
    if (hasErrors.length > 0) {
      this.sendMessageError(hasErrors)
    }
  }

  static sendMessageError(errors: ValidationError[]) {
    const errorsFormatted = errors
      .map((error) => {
        return Object.keys(error.constraints as object).map((key) => {
          return error.constraints?.[key]
        })
      })
      .reduce((accumulator, currentValue) => {
        return [...accumulator, ...currentValue]
      })
    throw new HttpException(HttpStatusCode.BAD_REQUEST, {
      error: 'Bad Request',
      message: errorsFormatted as string[],
    })
  }
}
