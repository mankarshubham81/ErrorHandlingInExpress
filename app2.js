import express from "express";
import userRouter from './routes/user.js'
import errorMiddleware from './middlewares/Error.js';
import {connectDB} from './config/database.js'
// console.log("aaa");
const PORT = 4100;
const app = express();

class CustomErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}


app.use(userRouter)
// app.use("/users",userRouter)
connectDB();

app.listen(PORT,() => {
    console.log(`Server is working on port ${PORT}`)
});


// Error middleware should be placed in bottom of code
app.use(errorMiddleware);