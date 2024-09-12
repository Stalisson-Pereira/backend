import express from 'express'
import ClienteCadastro from './models/ClienteCadastro..js'
import ProdutoCadastro from './models/ProdutoCadastro.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import userRoutes from './routes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
ClienteCadastro.init(sequelize)
ProdutoCadastro.init(sequelize)

app.use('/clientes', userRoutes)
// app.use('/produtos', productRoutes)
// app.use('/relatorios', reportRoutes)

sequelize.authenticate().then(() => {
    console.log("Banco de dados Conectado😁!")
    app.listen(3000, () => {
        console.log("Servidor ON 🚀!")
    })
}).catch(err => {
    console.error(err)
})

