import ClienteCadastro from "../models/ClienteCadastro.js"
import crypto from 'node:crypto'

export const createUser = async (req, res) => {
    try {
        const clienteToCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }

        const cliente = await ClienteCadastro.create(clienteToCreate)

        res.status(201).json(cliente)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const clientes = await ClienteCadastro.findAll()
        res.status(200).json(clientes)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const deleteUsers = async (req, res) => {
    try {
        const cliente = await ClienteCadastro.destroy({
            where: { id: req.params.id }
        })
        res.status(200).json(cliente)
    } catch (err) {
        res.status(500).json(err)
    }
}
