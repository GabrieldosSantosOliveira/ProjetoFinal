import { Router } from 'express'
import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import { FindOneAuthorComposer } from '../composers/author/find-one-author-compose'

export default function FindOneAuthorRouter(router: Router) {
  router.get(
    '/author/:id',
    ExpressRouterAdapter.adapter(FindOneAuthorComposer.route()),
  )
}
