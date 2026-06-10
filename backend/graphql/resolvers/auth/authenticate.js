import jwt from 'jsonwebtoken';
const createToken=(user)=>{
    return jwt.sign({userId:user._id},process.env.JWT_SECRET||'afhkjdhjfbeajdfbqejkhfbq',{expiresIn:'1d'});
}
export default createToken;