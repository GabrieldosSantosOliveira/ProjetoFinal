import { Replace } from '@/helpers/utility-types/replace'
import { randomUUID } from 'crypto'

export interface AuthorProps {
  id: string
  firstName: string
  lastName: string
  dateOfBirth: Date
  createdAt: Date
  updatedAt: Date
}
export class Author {
  private props: AuthorProps
  constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: Replace<
    AuthorProps,
    { id?: string; createdAt?: Date; updatedAt?: Date }
  >) {
    this.props = {
      id: id || randomUUID(),
      createdAt: createdAt || new Date(),
      updatedAt: updatedAt || new Date(),
      ...props,
    }
  }

  public get id() {
    return this.props.id
  }

  public get firstName() {
    return this.props.firstName
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName
  }

  public get fullName() {
    return this.firstName + ' ' + this.lastName
  }

  public get lastName() {
    return this.props.lastName
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName
  }

  public get dateOfBirth() {
    return this.props.dateOfBirth
  }

  public set dateOfBirth(dateOfBirth: Date) {
    this.props.dateOfBirth = dateOfBirth
  }

  public get createdAt() {
    return this.props.createdAt
  }

  public get updatedAt() {
    return this.props.updatedAt
  }

  public set updatedAt(updatedAt: Date) {
    this.props.updatedAt = updatedAt
  }
}
