import mongoose from "mongoose";

const MONGODB_URI ="mongodb+srv://unavailablej73:vWpJrlnRpblufpOK@referandearn.cjadv.mongodb.net/?retryWrites=true&w=majority&appName=ReferAndEarn"; // add your connection string Here

export const ConnectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log(`Database connected Successfully`);
  } catch (error) {
    console.log(`Error in Connecting to Mongodb`);
  }
};
