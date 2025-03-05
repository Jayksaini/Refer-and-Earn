import mongoose, { mongo } from "mongoose"


const MONGODB_URI= "mongodb+srv://shobhit1948:4FtgTTG5Ld172RsF@cluster0.pcdzl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" // add your connection string Here 

export const ConnectDB = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log(`Database connected Successfully`);
        
    } catch (error) {
        console.log(`Error in Connecting to Mongodb`);
        
    }
}