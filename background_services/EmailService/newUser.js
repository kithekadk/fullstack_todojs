const ejs = require ('ejs');
const path = require('path')
const mssql = require ('mssql');

const { sqlConfig } = require('../Config/config');
const { sendMail } = require('../Helpers/email');
const { log } = require('console');

const welcomeAboard = async()=>{
    // console.log(sqlConfig);
    const pool = await mssql.connect(sqlConfig)
   
    if(pool.connected){
        console.log("connected");
    }else{
        console.log("Not connected");
    }
    
    const users = await(await pool.request().query('SELECT email FROM usersTable WHERE issent = 0')).recordset

    console.log(users);

    for(let user of users){
        ejs.renderFile('./Templates/welcomeUser.ejs', {email: user.email}, async(error, html)=>{
            const message = {
                from: process.env.EMAIL, 
                to: user.email,
                subject: "Welcome Aboard",
                html
            }

            try {
                await sendMail(message);
                await pool.request().query(`UPDATE usersTable SET issent = 1 WHERE email='${user.email}'`)
            } catch (error) {
                console.log(error);
            }
        })
    }
}

module.exports = {
    welcomeAboard
}

// export default welcomeAboard