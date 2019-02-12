const mongoose=require('mongoose')
const Schema=mongoose.Schema;
const visitor=new Schema({
    ip:{
        type:String
    },
    referrer:{
        type:String
    },
    visited_url:{
        type:String
    },
    visited_time:{
        type:String
    }
})
mongoose.model('Visitor',visitor);