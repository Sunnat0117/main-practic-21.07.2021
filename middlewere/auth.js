const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function auth (req, res, next){
    const token =  req.header('x-auth-token');
    if(!token){
        return res.status(401).send('token kiritilmagan');  
    }
    try{
        const decoder = jwt.verify(token, config.get('jwtPriveteKey'))
        req.user = decoder;
        next();
    }
    catch(error){
        return res.status(400).send('token notogri',)
    }

}

