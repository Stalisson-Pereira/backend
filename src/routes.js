import express from 'express'
import { createUser, getAllUsers, deleteUsers } from './controllers/clienteController.js'
import { createProduct, getAllProducts, deleteProducts } from './controllers/produtoController.js'

const router = express.Router()

router.post('/cadastro', createUser, createProduct)
router.get('/todos', getAllUsers,getAllProducts)
router.delete('/deletar/:id', deleteUsers, deleteProducts)

export default router