const {v4} = require ('uuid');
const { sqlConfig } = require('../config/config');
const mssql = require('mssql')
const bcrypt = require('bcrypt')

const registerUser = async(req, res)=>{
    try{

        const id = v4();
        const {email, password} = req.body

        const hashedpwd = await bcrypt.hash(password, 5);
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input('id', mssql.VarChar, id)
        .input('email', mssql.VarChar, email)
        .input('password', mssql.VarChar, hashedpwd)
        .execute('createUser')

        return res.status(200).json({message: 'user created successfully'})

    }catch(error){
        return res.status(400).json({error: error.message})
    }
}

const loginUser = async(req, res)=>{
    try {
        const {email, password} = req.body
        const pool = await mssql.connect(sqlConfig);

        const user = (await pool.request().input('email', mssql.VarChar, email)
        .execute('fetchUsers')).recordset

        // const decryptedPWD = bcrypt.compare()

        return res.status(200).json({message: user})
    } catch (error) {
        
    }
}

module.exports = {
    registerUser,
    loginUser
}