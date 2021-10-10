exports.departmentOptions = [
    {
        name: 'newDepTitle',
        type: 'input',
        message: 'What is the new department name?'
    }
]

exports.jobOptions = [
    {
        name: 'newJobTitle',
        type: 'input',
        message: 'What is the new job\'s name?'
    },
    {
        name: 'newJobSalary',
        type: 'input',
        message: 'What is the salary?'
    },
    {
        name: 'newJobDepartment',
        type: 'input',
        message: 'In which department is the new job?',
        choices: ['Insert getDepartments here']
    }
]

exports.employeeOptions = [
    {
        name: 'newEmployeeFirst',
        type: 'input',
        message: 'What is the new employee\'s first name?'
    },
    {
        name: 'newJobSalary',
        type: 'input',
        message: 'What is the new employee\'s last name?'
    },
    {
        name: 'newJobDepartment',
        type: 'input',
        message: 'Which role do they take?',
        choices: ['Insert getJobs here']
    },
    {
        name: 'newJobDepartment',
        type: 'input',
        message: 'Who is their manager?',
        choices: ['Insert getManagers here']
    }
]