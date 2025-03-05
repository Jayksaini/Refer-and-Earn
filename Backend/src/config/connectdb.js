import mongoose, { mongo } from "mongoose"


const MONGODB_URI= "" // add your connection string Here 

export const ConnectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log(`Database connected Successfully`);
        
    } catch (error) {
        console.log(`Error in Connecting to Mongodb`);
        
    }
}