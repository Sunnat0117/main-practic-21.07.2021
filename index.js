const { Router } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const customeriesRouter = require("./router/customer");
const courseRouter = require("./router/course");
const cotegoryRouter = require("./router/cotegory");
const userRouter = require("./router/users")
const authRouter = require("./router/auth")
const config = require('config');
const bodyParser = require('body-parser');

if(!config.get('jwtPriveteKey')){
    console.error('jiddiy hato: muhit uzgaruvchisi topilmadi yoki hato kiritilgan iltimos tekshiring');
    process.exit(0);
}
const app = express();
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/customers", customeriesRouter );
app.use("/api/course", courseRouter );
app.use("/api/cotegory", cotegoryRouter );
app.use("/api/users", userRouter );
app.use("/api/auth", authRouter );

mongoose.connect('mongodb://localhost/videoDarslik' ,
{ 
    useUnifiedTopology: true,
    useNewUrlParser: true 

}).then(()=>{
    console.log("mongoose connected");
})
.catch((err)=>{
    console.error(err)

})


app.get("/", (req, res)=>{
      res.send('good.  this is root page')
})

app.listen(3000, ()=>{
    console.log('server running on 3000 port');
})









