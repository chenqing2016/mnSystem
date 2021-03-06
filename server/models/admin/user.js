const mongoose=require('mongoose')
const Schema=mongoose.Schema
let user=new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    avator:{
        type:String,
        default:'avator.jpg'
    },
    login_time:{
        type:Date,
        default:Date.now
    },
    last_login_time:{
        type:Date,
        default:Date.now
    }
})
mongoose.model('user_info',user);