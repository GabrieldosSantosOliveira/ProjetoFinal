import { Replace } from '@/helpers/utility-types/replace'
import { randomUUID } from 'crypto'

export interface PublisherProps {
  id: string
  name: string
}
export class Publisher {
  private props: PublisherProps
  constructor({ id, name }: Replace<PublisherProps, { id?: string }>) {
    this.props = {
      id: id || randomUUID(),
      name,
    }
  }

  public get id() {
    return this.props.id
  }

  public get name() {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }
}
