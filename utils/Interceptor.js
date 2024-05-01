const jwt = require('jsonwebtoken');
const { SECRETKEY } = process.env.SECRET_KEY;
function Interceptor(req,res,next){
    const token = req.header('Authorization')?.split(' ')[1];
    if(token){
      jwt.verify(token,SECRETKEY,(err,user)=>{
        if(!err){
          req.user = user;
        }
        next();
      });
    }
    else{
      next();
    }
  }
  module.exports = Interceptor;