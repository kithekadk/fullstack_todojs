const express = require('express');
const {router} = require ('./routes/todoRoutes');
const cors = require('cors');

const dotenv = require ('dotenv');
const { userRouter } = require('./routes/userRoutes');

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.use('/todos', router)
app.use('/users', userRouter)

app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
