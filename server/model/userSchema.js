const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type: String,
        required : true,
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    work : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    cpassword : {
        type : String,
        required : true
    },
    tokens:[
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})

// hashing the password :
userSchema.pre('save' ,async function(next){
    //console.log("hi from hashing part");
    if(this.isModified('password')){
        //console.log("inside pre if");
        this.password = await bcrypt.hash(this.password,12);
        this.cpassword = await bcrypt.hash(this.cpassword,12);
    }
    next();
});

// Generating authentification token:
userSchema.methods.generateAuthToken = async function(){
    try{
        let tokenT = jwt.sign({_id : this._id} , process.env.SECRET_KEY);
        this.tokens = await this.tokens.concat({token : tokenT}); 
        await this.save();
        return tokenT ;
    }
    catch(err){
        console.log(err);
    }
}

// collection creation :
const User = mongoose.model('USER',userSchema);

module.exports = User ;