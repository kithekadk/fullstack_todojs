const express = require('express');
const {router} = require ('./routes/todoRoutes');
const dotenv = require ('dotenv')

const app = express();
dotenv.config();
app.use(express.json());
app.use('/todos', router)

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
