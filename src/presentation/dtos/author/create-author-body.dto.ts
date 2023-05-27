import { Type } from 'class-transformer'
import { IsDateString, IsNotEmpty, IsString } from 'class-validator'
export interface CreateAuthorBodyDtoProps {
  firstName: string
  lastName: string
  dateOfBirth: string | number
}
export class CreateAuthorBodyDto {
  constructor({ dateOfBirth, firstName, lastName }: CreateAuthorBodyDtoProps) {
    this.dateOfBirth = dateOfBirth
    this.firstName = firstName
    this.lastName = lastName
  }

  @IsNotEmpty()
  @IsString()
  public firstName: string

  @IsNotEmpty()
  @IsString()
  public lastName: string

  @IsDateString()
  @Type(() => Date)
  public dateOfBirth: string | number
}
