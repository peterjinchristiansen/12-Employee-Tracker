require('dotenv').config()
const Sequelize = require('sequelize')

const database = new Sequelize (process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql',
    define: {
        timestamps: false
    }
})

module.exports = database