const {v4} = require ('uuid');
const { sqlConfig } = require('../config/config');
const mssql = require('mssql')

// const {exec, query} = require('')

const insertTodo = async (req, res)=>{
    try {
        const id = v4();

        const {title, description, deadline} = req.body;
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input('id', mssql.VarChar, id)
        .input('title', mssql.VarChar, title)
        .input('description', mssql.VarChar, description)
        .input('deadline', mssql.Date, deadline)

        .execute('insertTodo');

        return res.json({message: 'todo created successfully'})
    } catch (error) {
        return res.json({error: error.message})
    }
}

const getTodos = async(req, res)=>{
    try{
        const pool = await mssql.connect(sqlConfig)

        const todos = (await pool.request().execute('getTodos')).recordset;
        return res.json(todos);
    }catch(error){
        res.status(404).json({error:error.message}) 
    }
}

const getOneTodo = async(req, res)=>{
    try {
        const {id} = req.params
        const pool = await mssql.connect(sqlConfig)
        const result = await (pool.request()
        .input('id', id)
        .execute('getOneTodo'))
        const todo = result.recordset;

        if(todo.length != 0){
            return res.json(todo);
        }else{
            return res.json({message:`Task with id ${id} does not exist`})
        }
    } catch (error) {  
        return res.json({error: `Task with that id is not found`})
    }
}

const updateTodo = async (req, res)=>{
    try {
        const {id} = req.params
        const pool = await mssql.connect(sqlConfig);

        const {title, description, deadline} = req.body;

        await pool.request()
        .input('id', id)
        .input('title', mssql.VarChar, title)
        .input('description', mssql.VarChar, description)
        .input('deadline', mssql.Date, deadline)
        .execute('updateTodo')

        return res.json({message: 'Todo updated'})
    } catch (error) {
        return res.json({error: error.message}) 
    }
}

const deleteTodo = async (req, res)=>{
    try {
        const {id} = req.params
        const pool = await mssql.connect(sqlConfig)

        await pool.request()
        .input('id', id)
        .execute('deleteTodo')

        return res.json({message: "todo deleted successfully"})
    } catch (error) {
        return res.json(error.message)
    }
}

module.exports = 
{
    insertTodo,
    getTodos,
    getOneTodo,
    updateTodo,
    deleteTodo
}