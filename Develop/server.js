const mysql = require('mysql2');
const inquirer = require('inquirer')
const { connectDatabase } = require('./database/connect')
const { setup, initialize } = require('./inquirer/universal')
const { departmentOptions, jobOptions, employeeOptions } = require('./inquirer/entrees')
const { newDatabase, existingDatabase, prebuiltDatabase } = require('./controller/controlDB')
const { getDepartments, getJobs, getEmployees } = require('./controller/getTable')
const { addDepartment, addJob, addEmployee, updateEmployee } = require('./controller/changeTable')



// connectDatabase();


inquirer.prompt(setup)
    .then(res => {
        switch(res.setup) {
            case 'new':
                newDatabase();
                break;
            case 'existing':
                break;
            case 'prebuilt':
                prebuiltDatabase();
                break;
        }
        init();
    }
)



const init = () => inquirer.prompt(initialize)
    .then(res => {
        switch(res.initialize) {
            case 'viewDep':
                getDepartments().then(res => console.log(res));
                break;
            case 'viewJob':
                getJobs().then(res => console.log(res));
                break;
            case 'viewEmp':
                getEmployees().then(res => console.log(res));
                break;
            case 'addDep':
                addDepartment();
                break;
            case 'addJob':
                addJob();
                break;
            case 'addEmp':
                addEmployee();
                break;
            case 'updateEmp':
                updateEmployee();
                break;
        }
    })




// let sql = 'CREATE DATABASE test';
// database.query(sql, (err, result) => {
//     if(err) {
//         console.log('Error')
//         throw err
//     }
//     console.log(result)
// })