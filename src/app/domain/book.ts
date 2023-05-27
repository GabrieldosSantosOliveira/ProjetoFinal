import { Replace } from '@/helpers/utility-types/replace'
import { Publisher } from './publisher'
import { randomUUID } from 'crypto'

export interface BookProps {
  id: string
  publisher: Publisher
  price: number
  title: string
  publicationDate: Date
  createdAt: Date
  updatedAt: Date
}
export class Book {
  private props: BookProps
  constructor({
    id,
    createdAt,
    updatedAt,
    ...props
  }: Replace<BookProps, { id?: string; createdAt?: Date; updatedAt?: Date }>) {
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

  public get publisher() {
    return this.props.publisher
  }

  public get price() {
    return this.props.price
  }

  public set price(price: number) {
    this.props.price = price
  }

  public get title() {
    return this.props.title
  }

  public set title(title: string) {
    this.props.title = title
  }

  public get publicationDate() {
    return this.props.publicationDate
  }

  public set publicationDate(publicationDate: Date) {
    this.props.publicationDate = publicationDate
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
