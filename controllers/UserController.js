const mongoose=require('mongoose');
const User=require('../models/User');
const CryptoJS = require("crypto-js");

module.exports={

    getAllUsers:function(req,callback){

       return User.find({},callback);
    },
    addUser:function(req,callback)
    {
        console.log(req.body);
        req.body.password = CryptoJS.MD5(req.body.password);
        let user = User(req.body);
         return user.save(callback);
},
userAuthentication:function(req,callback){

         let encryptedPassword = String(CryptoJS.MD5(req.body.password));
         let user=User.findOne({email:req.body.email,password:encryptedPassword},callback);
         console.log(encryptedPassword);
    }
}