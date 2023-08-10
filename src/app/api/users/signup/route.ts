import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
connect();

export async function POST(request: NextRequest){
    try{
        const reqBody= await request.json();
        const {username,password,email} = reqBody;
        console.log(reqBody);

        const user= await User.findOne({email})

        if(user){
            return NextResponse.json({error: "user already exists"},{status:400});
        }else{
            //hash the password
            const salt=await bcryptjs.genSalt(10);
            const hash =await bcryptjs.hash(password, salt);

            const newuser = new User({username,email,password:hash});
            const savedUser = await newuser.save();
            console.log(savedUser);

            return NextResponse.json({
                messege:"user saved successfully",
                success:true,
                savedUser:savedUser
            },{status:200});




        }

    }catch(err:any){
        return NextResponse.json({error:err.message},{status:err.status});
    }
}