const { database, connectDatabase } = require('../database/connect')

exports.getDepartments = async () => {
    let viewDep = 'SELECT * FROM business.departments';
    database.query(viewDep, (err, result) => {
        if(err) {
            console.log('Error')
            throw err
        }

        return 
    })
}

exports.getJobs = async () => {
    let viewDep = 'SELECT * FROM business.jobs';
    return database.promise().query(viewDep, (err, result) => {
        if(err) {
            console.log('Error')
            throw err
        }
        ;
    })
}

exports.getEmployees = async () => {
    let viewDep = 'SELECT * FROM business.employees';
    database.query(viewDep, (err, result) => {
        if(err) {
            console.log('Error')
            throw err
        }
        return result;
    })
}