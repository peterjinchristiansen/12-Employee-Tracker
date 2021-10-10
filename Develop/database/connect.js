const mysql = require('mysql2')

const database = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'gmr6o9lplTorWWxJ'
})

const connectDatabase = () => {database.connect((err) => {
    if(err) {
        console.log('Could not connect')
    } else {
        console.log('Connected!')
    }
})}

module.exports = { database, connectDatabase }