import { Router } from 'express'
import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import { UpdateAuthorComposer } from '../composers/author/update-author-compose'

export default function UpdateAuthorRouter(router: Router) {
  router.put(
    '/author/:id',
    ExpressRouterAdapter.adapter(UpdateAuthorComposer.route()),
  )
}
