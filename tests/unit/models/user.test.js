const {User} = require('../../../models/user');
const jwt = require('jsonwebtoken');
const config =  require('config')


describe('user.generateAuthToken', ()=>{
        it('should return the token if this is valid', ()=>{
                const user = new User({isAdmin : true});
                const  token = user.generateAuthToken();
                const decodedObject = jwt.verify(token,  config.get('jwtPriveteKey'));
                expect(decodedObject).toMatchObject({isAdmin : true})
                
        })
});