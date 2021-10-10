const setup = [
        {
            name: 'setup',
            type: 'list',
            message: 'Please select one of the following options...',
            choices: [
                {
                    name: 'Start from an empty database',
                    value: 'new'
                },
                {
                    name: 'Continue from my existing database',
                    value: 'existing'
                },
                {
                    name: 'Start using a pre-build database',
                    value: 'prebuilt'
                }
            ]
        }
    ]


const initialize = [
        {
            name: 'initialize',
            type: 'list',
            message: 'Please select one of the following...',
            choices: [
                {
                    name: 'View all departments',
                    value: 'viewDep'
                },
                {
                    name: 'View all roles',
                    value: 'viewJob'
                },
                {
                    name: 'View all employees',
                    value: 'viewEmp'
                },
                {
                    name: 'Add a department',
                    value: 'addDep'
                },
                {
                    name: 'Add a role',
                    value: 'addJob'
                },
                {
                    name: 'Add an employee',
                    value: 'addEmp'
                },
                {
                    name: 'Update an employee',
                    value: 'updateEmp'
                }
            ]
        }
    ]

module.exports = { setup, initialize }