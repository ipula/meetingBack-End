const mongoose=require('mongoose'); 
const controller=require('../controllers/UserController');
const config=require('./config');
const jwt    = require('jsonwebtoken');

let generatePayload = function(user){
    var payload = {};
    payload.user = {
        email: user.email
    };
    return payload;
}

module.exports={ 
  getUsers:function(req,res)
    {
        // res.send("ok");
        controller.getAllUsers(req,function(err,user)
        {
            if(user)
            {
                var response = {
                        message: "ok",
                };
            res.status(200).send(user);
            }
            if(err){
                var response = {
                        message: "no recodes",
                };
                    res.status(500).send(err);
            }

        });
    },
    addUser:function(req,res)
    {
        controller.addUser(req,function(err,user)
        {
            if(user)
            {
                var response = {
                        message: "successfully created",
                };
            res.status(200).send(response);
            }
            if(err){
                var response = {
                        message: "user not found",
                };
                    res.status(500).send(err);
            }

        });
    },
     authenticate:function(req,res)
    {
        controller.userAuthentication(req,function(err,user){
            // res.status(200).send("response");  

            if(err)
            {
                  res.status(500).send(err);   
            }
            if(user)
            {
                 let payload = generatePayload(user);

                     let token = jwt.sign(user,config.secret , {
                        expiresIn: 1440 // expires in 24 hours
                        });

                       let response = {
                            success: true,
                            obj:user,
                            message: 'Enjoy your token!',
                            token: token
                        };    

                        res.status(200).send(response);   

            }
            else
            { 
                       let response = {
                            success: false,
                            message: 'User name or Password Incorrect!',
                            // token: token
                        };    

                        res.status(500).send(response);   
            }

        });
    },
}