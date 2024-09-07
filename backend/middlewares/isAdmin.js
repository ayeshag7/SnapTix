import User from "../models/Users.js";
import { notFoundResponse, successResponse } from "./apiResonse.js";

const isAdmin = async (req, res, next) =>{
    
    const  userEmail  = req.user;
    const ifAdmin = await User.findOne({ email: userEmail });
    console.log(ifAdmin)

    if (ifAdmin.admin === true){
            next();
    }else{
        return notFoundResponse(res, "You are not allowed")
    }


}

export default isAdmin;