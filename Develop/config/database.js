const Sequelize = require('sequelize')

const database = new Sequelize('employeetracker', 'root', 'gmr6o9lplTorWWxJ', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = database;