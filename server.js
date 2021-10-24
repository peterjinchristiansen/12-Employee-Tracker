// Initializing dependencies
require('dotenv').config({path: './config/.env' })
const inquirer = require('inquirer')

const database = require('./config/database')
const obtain = require('./controllers/obtain')
const interact = require('./controllers/interact')

const Department = require('./models/Department')
const Job = require('./models/Job')
const Employee = require('./models/Employee')

const connect = async () => {
    await database.authenticate()
    .then(async () => {
        await database.sync()
        console.log('Connected...')
        init()
    }).catch(error => {
        console.log('Failed to connect => ', error)
    })
}
connect()

const init = () => {
    inquirer.prompt([{
        name: 'init',
        type: 'list',
        message: 'Please select one of the following options',
        choices: [
            'View all departments', 
            'View all jobs', 
            'View all employees',
            'Add a department',
            'Add a job',
            'Add an employee',
            'Update an employee job'    
        ]
    }]).then(response => {
        switch(response.init) {
            case 'View all departments':
                obtain.viewDepartments()
                break;
            case 'View all jobs':
                obtain.viewJobs()
                break;
            case 'View all employees':
                obtain.viewEmployees()
                break;
            case 'Add a department':
                interact.addDepartment()
                break;
            case 'Add a job':
                interact.addJob()
                break;
            case 'Add an employee':
                interact.addEmployee()
                break;
            case 'Update an employee job':
                interact.updateEmployee()
                break;
        }
    })
}




