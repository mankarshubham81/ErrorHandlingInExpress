import express from "express";
console.log("aaa");
const PORT = 4100;
const app = express();

class CustomErrorHandler extends Error {
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
    }
}

app.listen(PORT,() => {
    console.log(`Server is working on port ${PORT}`)
});

app.get('/', (req,res,next) => {
    // return next(new CustomErrorHandler("Un Authorizedd", 404));
    // res.status(404).json({
    //    message: "Cosoms explorer"
    // })
    res.send(`<h1>Sup Cosmos</h1>`)
})

app.use((err, req, res, next) => {
 console.log("working");

 err.statusCode = err.statusCode || 500;
 err.message = err.message || "Internal server error";
 res.status(err.statusCode).json({
    meg: err.message 
 })
})