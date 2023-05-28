import { Router } from 'express'
import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import { FindAllAuthorComposer } from '../composers/author/find-all-author-compose'

export default function FindAllAuthorRouter(router: Router) {
  router.get(
    '/author',
    ExpressRouterAdapter.adapter(FindAllAuthorComposer.route()),
  )
}
