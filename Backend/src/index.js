import express from "express"
import AuthRoutes from "./routes/authRoutes.js"

const app = express();
 const PORT = 8000;


 app.use("/api", AuthRoutes);



app.listen(PORT , ()=>{
    console.log(`Server is listening on ${PORT}`);
    
})