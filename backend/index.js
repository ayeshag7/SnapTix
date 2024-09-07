import express from "express";
import userRoute from "./routes/User.js"
import eventRoute from "./routes/Event.js"
import connectToMongo from "./config/connection.js";
import cookieParser from "cookie-parser";
import AuthonticateUser from "./middlewares/Auth.js";
import isAdmin from "./middlewares/isAdmin.js"
import cors from "cors";

const app = express();
const PORT = 4000;
app.use(cors());

connectToMongo('mongodb://localhost:27017/ecommerce_store').then(() => {
  console.log('Database Connected');
});

app.use(express.json())
app.use(express.urlencoded())
app.use(cookieParser())


app.use('/api/user', userRoute)
app.use('/event', eventRoute)
// app.use('/api/products', productRoute)
// app.use('/api/category', AuthonticateUser, isAdmin, categoryRoute)
app.get("/", (req, res) =>{
    res.send("done!")
})





app.listen(PORT, () =>{
    console.log(`App is listening at ${PORT}`)
})