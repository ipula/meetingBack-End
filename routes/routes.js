'use strict'
let middleware=require('../middleware/login');

module.exports = function(app) {
    app.get('/user',middleware.getUsers);
    app.post('/user',middleware.addUser);
    app.post('/login',middleware.authenticate);
};