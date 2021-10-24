const db = require('./dbfunctions')

exports.viewDepartments = async () => {
    const departments = await db.getAllDepartments()
    const departmentsFormatted = []
    for(i = 0; i < departments.length; i++) {
        departmentsFormatted.push({
            departmentID: departments[i].id,
            departmentName: departments[i].name
        })
    }
    console.table(departmentsFormatted)
}

exports.viewJobs = async () => {
    const jobs = await db.getAllJobs()
    const jobsFormatted = []
    for(i = 0; i < jobs.length; i++) {
        const getDepartment = await db.getOneDepartment(jobs[i].department_id)
        jobsFormatted.push({
            jobID: jobs[i].id,
            jobTitle: jobs[i].title,
            department: getDepartment.name,
            salary: jobs[i].salary,
        })
    }
    console.table(jobsFormatted)
}

exports.viewEmployees = async () => {
    const employees = await db.getAllEmployees()
    const employeesFormatted = []
    for(i = 0; i < employees.length; i++) {
        const getJob = await db.getOneJob(employees[i].job_id)
        const getDepartment = await db.getOneDepartment(getJob.department_id)
        const getEmployee = await db.getOneEmployee(employees[i].manager_id)
        employeesFormatted.push({
            employeeID: employees[i].id,
            firstName: employees[i].first_name,
            lastName: employees[i].last_name,
            job: getJob.title,
            department: getDepartment.name,
            salary: getJob.salary,
            manager: getEmployee
        })
    }
    console.table(employeesFormatted)
}