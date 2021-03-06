const jwt=require('jsonwebtoken')
const config=require('../config')
exports.sign=(user)=>{
    const {
        secret,
        expiresIn
    }=config.jwt;
    const token=jwt.sign({
        username:user.username,
        userid:user._id,
        password:user.password,
    },secret,{expiresIn:expiresIn});
    return token;
}
exports.verify=(token)=>{
    const decoded=jwt.verify(token,config.jwt.secret);
    return decoded;
}

