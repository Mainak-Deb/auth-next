import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
connect();

export async function POST(request: NextRequest){
    try{
        const reqBody= await request.json();
        const {password,email} = reqBody;
        console.log(reqBody);
        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"user not found"},{status:200});
        }

        const validatepassword = await bcryptjs.compare(password,user.password);
        if(!validatepassword){
            return NextResponse.json({error:"password incorrect"},{status:200});
        }
        
        //create token
        const tokenData={
            id:user._id,
            email:user.email,
            username:user.username
        }

        const token = await jwt.sign(tokenData,process.env.TOKEN_SECRET!,{expiresIn:"1h"}); 
        
        const response= NextResponse.json({
            messege:"login successful",
            success: true
        });

        response.cookies.set("token",token,{
            httpOnly: true
        });

        return response;
    }catch(err:any){
        return NextResponse.json({error:err.message},{status:err.status});
    }
}