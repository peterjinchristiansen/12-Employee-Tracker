const database = require('../config/database')
const Sequelize = require('sequelize')

const Department = database.define('department', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 30]
        }
    }
})

module.exports = Department