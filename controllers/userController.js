import CustomErrorHandler from "../utils/errorHandler.js"
import { User } from "../model/user.js"

export const newUser = async (req,res, next) => {
    const userExist = false;
    if(userExist){
        return next(new CustomErrorHandler("User already Exist", 400))
    }

    await User.create({
        name: "Sam",
        email: "sam@gmail.com"
    })
    // res.send(`<h1>Sup Cosmos</h1>`)
    res.status(201).json({
       message: "User created succesfully"
    })
    
}