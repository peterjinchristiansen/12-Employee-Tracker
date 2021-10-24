const database = require('../config/database')
const Sequelize = require('sequelize')

const Job = database.define('job', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            len: [1, 30]
        }
    }, 
    salary: {
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    department_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Job