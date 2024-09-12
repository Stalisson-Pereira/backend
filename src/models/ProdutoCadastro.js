import Sequelize, { Model } from "sequelize";

class ProdutoCadastro extends Model {
    static init(sequelize) {
        super.init(

            {
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                price: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                description: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
            },

            { sequelize }
        )
    }
}

export default ProdutoCadastro