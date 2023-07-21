const express = require ('express');
const cron = require('node-cron');
const { welcomeAboard } = require('./EmailService/newUser');


const app = express()

cron.schedule('*/10 * * * * *', async()=>{
    console.log('running a task after 10 seconds');
    await welcomeAboard()
    console.log('called');
})

app.listen(4001, ()=>{
    console.log('BG services are running');;
})