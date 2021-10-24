const db = require('./dbfunctions')
const inquirer = require('inquirer')

exports.addDepartment = async () => {
    inquirer.prompt([
        {
            name: 'departmentName',
            type: 'input',
            message: 'Please enter the name of this department'
        }
    ]).then(response => {
        const { departmentName } = response
        db.createDepartment(departmentName)
    })
}

exports.addJob = async () => {
    const departments = await db.getAllDepartments()
    const departmentNames = departments.map(department => department.name)
    inquirer.prompt([
        {
            name: 'jobTitle',
            type: 'input',
            message: 'Please enter the title of this job'
        },
        {
            name: 'jobSalary',
            type: 'input',
            message: 'Please enter the salary of this job'
        },
        {
            name: 'jobDepartment',
            type: 'list',
            message: 'Please select the job department',
            choices: departmentNames
        }
    ]).then(response => {
        const { jobTitle, jobSalary, jobDepartment } = response
        db.createJob(jobTitle, jobSalary, jobDepartment)
    })
}

exports.addEmployee = async () => {
    const jobs = await db.getAllJobs()
    const jobTitles = jobs.map(job => job.title)
    const employees = await db.getAllEmployees('unfiltered')
    const employeeFullNames = employees.map(employee => employee.full_name)
    employeeFullNames.unshift('None')
    inquirer.prompt([
        {
            name: 'employeeFirst',
            type: 'input',
            message: 'Please enter the employee first name'
        },
        {
            name: 'employeeLast',
            type: 'input',
            message: 'Please enter the employee last name'
        },
        {
            name: 'employeeJob',
            type: 'list',
            message: 'Please select the employee job',
            choices: jobTitles
        },
        {
            name: 'employeeManager',
            type: 'list',
            message: 'Please select the employee manager',
            choices: employeeFullNames
        },
    ]).then(response => {
        const { employeeFirst, employeeLast, employeeJob, employeeManager } = response
        db.createEmployee(employeeFirst, employeeLast, employeeJob, employeeManager)
    })
}

exports.updateEmployee = async () => {
    const employees = await db.getAllEmployees('unfiltered')
    const employeeFullNames = employees.map(employee => employee.full_name)
    const jobs = await db.getAllJobs()
    const jobTitles = jobs.map(job => job.title)
    inquirer.prompt([
        {
            name: 'changedEmployee',
            type: 'list',
            message: 'Please select the employee to update',
            choices: employeeFullNames
        },
        {
            name: 'changedRole',
            type: 'list',
            message: 'Please select the new job',
            choices: jobTitles
        }
    ]).then(response => {
        const { changedEmployee, changedRole } = response
        db.updateEmployee(changedEmployee, changedRole)
    })
}