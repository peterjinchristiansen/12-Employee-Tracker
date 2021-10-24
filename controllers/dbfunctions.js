const Department = require('../models/Department')
const Job = require('../models/Job')
const Employee = require('../models/Employee')

const getAllDepartments = async () => {
    const getDepartments = await Department.findAll()
    return getDepartments.map(department => department.dataValues)
}

const getAllJobs = async () => {
    const getJobs = await Job.findAll()
    return getJobs.map(job => job.dataValues)
}

const getAllEmployees = async (type) => {
    const getEmployees = await Employee.findAll()
    if(type === 'unfiltered') {
        return getEmployees
    }
    return getEmployees.map(employee => employee.dataValues)
}

const getOneDepartment = async (input, type) => {
    let params = { where: { id: input }}
    if(type === 'name') {
        params = { where: { name: input }}
    }
    const getDepartment = await Department.findOne(params)
    return getDepartment.dataValues
}

const getOneJob = async (input, type) => {
    let params = { where: { id: input }}
    if(type === 'title') {
        params = { where: { title: input }}
    }
    const getJob = await Job.findOne(params)
    return getJob.dataValues
}

const getOneEmployee = async (input) => {
    const findEmployee = await Employee.findOne({ where: { id: input }})
    if(!findEmployee) {
        return null
    }
    return findEmployee.full_name
}

const createDepartment = async (name) => {
    try {
        Department.create({
            name
        })
        console.log(`${name} was added to Departments`)
    } catch (error) {
        console.log('ERROR => ', error.message)
    }
}

const createJob = async (title, salary, department) => {
    const getDepartment = await getOneDepartment(department, 'name')
    const department_id = getDepartment.id
    try {
        await Job.create({
            title,
            salary,
            department_id
        })
        console.log(`${title} was added to Jobs`)
    } catch (error) {
        console.log('ERROR => ', error.message)
    }
}

const findEmployeeIDByFullName = async (fullName) => {
    const employees = await getAllEmployees('unfiltered')
    const employeesCustom = employees.map(employee => {
        return {
            id: employee.dataValues.id,
            full: employee.full_name
        }
    })
    let thisUser = null
    for(i = 0; i < employeesCustom.length; i++) {
        if(employeesCustom[i].full === fullName) {
            thisUser = employeesCustom[i]
        }
    }
    return thisUser.id
}

const createEmployee = async (first_name, last_name, job, manager) => {
    const getJob = await getOneJob(job, 'title')
    const job_id = getJob.id
    const manager_id = await findEmployeeIDByFullName(manager)
    try {
        await Employee.create({
            first_name,
            last_name,
            job_id,
            manager_id
        })
        console.log(`${first_name} ${last_name} was added to Employees`)
    } catch (error) {
        console.log('ERROR => ', error.message)
    }
}

const updateEmployee = async (employee, job) => {
    const employeeID = await findEmployeeIDByFullName(employee)
    const jobID = await getOneJob(job, 'title')
    try {
        await Employee.update(
            { job_id: jobID.id },
            { where: { id: employeeID }}
        )
        console.log(`${employee} job changed to ${job}`)
    } catch (error) {
        console.log('ERROR => ', error)
    }
}

module.exports = {
    getAllDepartments,
    getAllJobs,
    getAllEmployees,
    getOneDepartment,
    getOneJob,
    getOneEmployee,
    createDepartment,
    createJob,
    createEmployee,
    updateEmployee
}