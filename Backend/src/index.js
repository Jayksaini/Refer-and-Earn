import express from "express"
import AuthRoutes from "./routes/authRoutes.js"
import { ConnectDB } from "./config/connectdb.js";
import dotenv from "dotenv";

dotenv.config();
const Mongodb = process.env.MONGODB_URI;
const app = express();
 const PORT = 8000;


 app.use("/api", AuthRoutes);



app.listen(PORT , ()=>{
    console.log(`Server is listening on ${PORT}`);
    ConnectDB(Mongodb);
})