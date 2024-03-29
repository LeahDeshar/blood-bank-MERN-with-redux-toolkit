const JWT = require("jsonwebtoken");

module.exports = async (req,res,next) =>
{
    try {

        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) {
          return res.status(401).json({ error: 'Authorization header missing' });
        }
        
        const token = req.headers['authorization'].split(" ")[1]
        console.log(token);
        JWT.verify(token,process.env.JWT_KEY,(err,decode)=>
        {
            if(err)
            {
                return res.status(401).send({
                    success: false,
                    message: 'Auth Failed',
                    err
                })
            }
            else{
                req.body.userId = decode.userId
                next();
            }
        })
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            error,
            message: 'Auth Failed'
        })
    }
}