const dotenv = require ('dotenv');
const path = require('path')
dotenv.config({path:path.resolve(__dirname,'../.env') })
const mssql= require("mssql")
const sqlConfig ={
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'localhost',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options:{
        encrypt : false,
        trustedServerCertificate:false
    }
}

// console.log(sqlConfig);
// async function run (){
//     const pool = await mssql.connect(sqlConfig)

// if(pool.connected){
//     console.log("connected");
// }else{
//     console.log("Not connected");
// }
// }

// run()
module.exports = {
    sqlConfig
}