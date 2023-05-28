import { IsDateString, IsNotEmpty, IsOptional, IsString } from 'class-validator'
export interface CreateAuthorBodyDtoProps {
  firstName?: string
  lastName?: string
  dateOfBirth?: string | number
}
export class UpdateAuthorBodyDto {
  constructor({ dateOfBirth, firstName, lastName }: CreateAuthorBodyDtoProps) {
    this.dateOfBirth = dateOfBirth
    this.firstName = firstName
    this.lastName = lastName
  }

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  public firstName?: string

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  public lastName?: string

  @IsDateString()
  @IsOptional()
  public dateOfBirth?: string | number
}
