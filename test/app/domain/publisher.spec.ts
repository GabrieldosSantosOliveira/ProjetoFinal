import { Publisher } from '@/app/domain/publisher'
import { makePublisher } from '@/test/factories/make-publisher'

describe('Publisher', () => {
  it('should be able create Publisher', () => {
    expect(makePublisher()).toBeInstanceOf(Publisher)
  })
})
