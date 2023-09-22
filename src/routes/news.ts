import express from 'express'
const router = express.Router()
import newsController from '../app/controllers/NewsController'

// newsController.index
router.get('/create', newsController.create)
router.post('/store', newsController.store)
router.get('/:id/edit', newsController.edit)
router.put('/:id', newsController.update)
router.delete('/:id', newsController.delete)
router.get('/:slug', newsController.show)

export default router