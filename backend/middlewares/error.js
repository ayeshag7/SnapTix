const errorMiddleware = (err, req, res, next) =>{
    console.log(err)
    const theStatus = err.status || 500;
    const message = err.message || "Unknown Error";
    const description = err.description || "Not Defined";

    res.status(theStatus).json({ "message": message, "description": description });
}

export default errorMiddleware;







