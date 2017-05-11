const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

const connection = mongoose.createConnection("mongodb://localhost/meeting");
autoIncrement.initialize(connection);

let userSchema=new mongoose.Schema({
    // id:{type:Number, unique:true},
    name:{type:String},
    password:{type:String},
    type:{type:Number},
    email:{type:String}

});
// productSchema.plugin(autoIncrement.plugin(),{ model: 'Product', field:'id' });
userSchema.plugin(autoIncrement.plugin,{ model: 'User' , field: 'id',startAt:1,incrementBy:1});
module.exports=mongoose.model('User',userSchema);