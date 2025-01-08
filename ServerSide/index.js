require('dotenv').config();
const express = require("express")
const mongoose= require("mongoose")
const cors = require("cors")
const usersModel = require("./models/users")


// PORT = 8000;

const PORT = process.env.PORT || 8000
const app = express();

app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://localhost:27017/employee" ,{
}).then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Failed to connect to MongoDB:", err));


app.post('/login', (req, res)=>{
    const {EmployeeEmail, password, confirmPassword } = req.body;
    usersModel.findOne({EmployeeEmail: EmployeeEmail})
   .then(user =>{
    if(user){
        if(user.password === password){
            res.json("Success")
        }
        else{
            res.json("The Password is incorrect!")
        }
    }
    else{
        res.json("SSorry, there is no user with this email!")
    }
   })
})



app.post('/register', (req, res)=>{
    usersModel.create(req.body)
    .then(Employeusers => res.json(Employeusers))
    .catch (err =>{
        console.error("Error during registration:",err);
        res.status(500).json(err);
    });
});




app.listen(PORT, ()=>{
    console.log(`The Server is Running Port is: ${PORT}`); 
})