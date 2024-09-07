import mongoose from "mongoose"

const connectToMongo = (url) =>{
    return mongoose.connect(url)
}

export default connectToMongo;