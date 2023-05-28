import { Router } from 'express'
import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import { RemoveAuthorComposer } from '../composers/author/remove-author-composer'

export default function RemoveAuthorRouter(router: Router) {
  router.delete(
    '/author/:id',
    ExpressRouterAdapter.adapter(RemoveAuthorComposer.route()),
  )
}
