const jwt = require('jsonwebtoken');
const {SECRETKEY} =process.env.SECRET_KEY;
function authToken (req,res,next){
    const token = req.header('Authorization')?.split(' ')[1];
    if(!token){
      res.status(400).json({
        status:'Unauthorized'
      });
    }
    jwt.verify(token,SECRETKEY,(err,user)=>{
      if(err){
        return res.status(403).json({
          status:'Unauthorised User!'
        });
      }
      req.user = user;
      next();
    });
  }
module.exports = authToken;