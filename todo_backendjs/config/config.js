const dotenv = require('dotenv');
const mssql = require('mssql');
dotenv.config()

const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'tododb',
    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options:{
        encrypt: false,
        trustServerCertificate: false
    }
}

mssql.connect(sqlConfig).then(pool=>{
    if(pool.connected){
        console.log('Connected to db...')
    }
})

module.exports = {sqlConfig};