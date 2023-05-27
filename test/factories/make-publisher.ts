import { Publisher, PublisherProps } from '@/app/domain/publisher'

export const makePublisher = (publisher: Partial<PublisherProps> = {}) => {
  return new Publisher({
    name: 'any_name',
  })
}
