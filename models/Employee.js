const database = require('../config/database')
const Sequelize = require('sequelize')

const Employee = database.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 30]
        }
    },
    full_name: {
        type: Sequelize.VIRTUAL,
        get() {
            return `${this.first_name} ${this.last_name}`
        }
    },
    job_id: {
        type: Sequelize.INTEGER
    },
    manager_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

Employee.beforeCreate(async newEmployee => {
    const findEmployees = await Employee.findAll()
    findEmployees.forEach(employee => {
        if(employee.full_name === newEmployee.full_name) {
            throw new Error('ERROR: You cannot have two users with the same full name')
        }
    })
})

module.exports = Employee