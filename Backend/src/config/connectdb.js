import mongoose from "mongoose";


export const ConnectDB = async (Mongodb) => {
  try {
    await mongoose.connect(Mongodb);
    console.log(`Database connected Successfully`);
  } catch (error) {
    console.log(`Error in Connecting to Mongodb`);
    console.log(error.message);
  }
};
