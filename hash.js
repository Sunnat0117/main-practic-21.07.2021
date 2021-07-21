const bcrypt = require('bcrypt');


async function getSalt(){
    const password = "5521deokcmo";
    const salt = await bcrypt.genSalt(); 
    // password  = await bcrypt.hash(password, salt)   
    console.log(salt)

}
getSalt();

