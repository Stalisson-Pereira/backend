import Sequelize, { Model } from "sequelize";

class ClienteCadastro extends Model {
    static init(sequelize) {
        super.init(

            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                phone: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true
                },
            },

            { sequelize })
    }
}

export default ClienteCadastro