const mongoose = require("mongoose")


const UsersSchema = new mongoose.Schema({
    EmployeeName: {type: String},
    EmployeeEmail:{type:String, required: true, unique: true},
    password:{ type: String, required: true },
})

const usersModel = mongoose.model("employee",UsersSchema)


module.exports = usersModel