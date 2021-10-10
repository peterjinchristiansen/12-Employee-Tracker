const mysql = require('mysql2')
const { database } = require('../database/connect')


let dropDatabase = 'DROP DATABASE IF EXISTS business'

let createDatabase = 'CREATE DATABASE business'

let createDepartmentsTable = `
    CREATE TABLE business.departments (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(64) UNIQUE
    )
`
let createJobsTable = `
    CREATE TABLE business.jobs (
        id INT PRIMARY KEY AUTO_INCREMENT,
        title VARCHAR(64) UNIQUE,
        department VARCHAR(64),
        salary INT
    )
`
let createEmployeesTable = `
    CREATE TABLE business.employees (
        id INT PRIMARY KEY AUTO_INCREMENT,
        first VARCHAR(64),
        last VARCHAR(64),
        department VARCHAR(64),
        job VARCHAR(64),
        salary INT,
        manager VARCHAR(64)
    )
`

exports.newDatabase = () => {
    database.query(dropDatabase);
    database.query(createDatabase);
    database.query(createDepartmentsTable);
    database.query(createJobsTable);
    database.query(createEmployeesTable);
}


exports.prebuiltDatabase = () => {
    console.log('prebuiltDatabase is running')
}