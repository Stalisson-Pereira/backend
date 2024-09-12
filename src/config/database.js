export default {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'db',
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true,
    }
}