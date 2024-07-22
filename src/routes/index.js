import { Router } from "express"
import productsRouter from './api/products.router.js'
import cartRouter from './api/cart.router.js'
import viewsRouter from './views.router.js'
import usersRouter from './api/users.router.js'
import { sessionRouter } from './api/sessions.router.js'

const router = Router()

router.use('/', viewsRouter)
router.use('/api/users', usersRouter)
router.use('/api/products', productsRouter)
router.use('/api/carts', cartRouter)
router.use('/api/sessions', sessionRouter)

export default router