import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
            username:{
                type:String,
                required:[true,"username required"],
            },
            email:{
                type:String,
                required:[true,"email required"],
                unique:true,
            },
            password:{
                type:String,
                required:[true,"password required"],
            },
            isAdmin:{
                type:String,
                default:false
            },
            forgotPasswordToken:String,
            forgotPasswordExpiary:Date,
            verifyToken:String,
            verifyExpiary:Date
    }
);

const User = mongoose.models.users||mongoose.model("users",userSchema);

export default User;