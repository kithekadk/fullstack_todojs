const dotenv = require ('dotenv');
const jwt = require ('jsonwebtoken');

dotenv.config()

const verifyToken = (req, res)=>{
    try {
        const token = req.headers['token'];

        if(!token){
            return res.status(404).json({
                message: "Permission set denies you access"
            })

        }

        const data = jwt.verify(token, process.env.KEY)
        req.info = data
    } catch (error) {
        res.json({
            message:error
        })
    }
}