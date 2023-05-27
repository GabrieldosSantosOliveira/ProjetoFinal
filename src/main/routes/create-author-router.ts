import { Router } from 'express'
import { ExpressRouterAdapter } from '../adapters/express-router-adapter'
import { CreateAuthorComposer } from '../composers/author/create-author-composer'

export default function CreateAuthorRouter(router: Router) {
  router.post(
    '/author',
    ExpressRouterAdapter.adapter(CreateAuthorComposer.route()),
  )
}
