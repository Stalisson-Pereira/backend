import ProdutoCadastro from "../models/ProdutoCadastro.js"
import crypto from 'node:crypto'

export const createProduct = async (req, res) => {
    try {
        const produtoToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }

        const produto = await ProdutoCadastro.create(produtoToCreate)

        res.status(201).json(produto)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getAllProducts = async (req, res) => {
    try {
        const produtos = await ProdutoCadastro.findAll()
        res.status(200).json(produtos)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const deleteProducts = async (req, res) => {
    try {
        const produto = await ProdutoCadastro.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(produto)
    } catch (err) {
        res.status(500).json(err)
    }
}
