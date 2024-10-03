import mongoose , {Document,Schema} from "mongoose";
import { Message } from "./Message.Model";
import { messageSchema } from "./Message.Model";



export interface User extends Document {
   username:string,
   email:string,
   password:string,
   verifyCode:string,
   verifyCodeExpiry:Date,
   isAcceptingMessages:boolean,
   messages:Message[]
}

const userSchema:Schema<User>= new Schema({
    username:{
        type:String,
        required:true,
        trim:true,

    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    verifyCode:{
        type:String,
        required:true
    },
    verifyCodeExpiry:{
        type:Date
    },
    isAcceptingMessages:{
        type:Boolean,
        default:true
    },
    messages:[messageSchema]

})


const userModel =(mongoose.models.User as mongoose.Model<User>)||mongoose.model<User>("User",userSchema)
export default userModel