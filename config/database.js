import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //   if DB connected don't connect

  if (connected) {
    console.log("MongoDB already connected....");
    return;
  }

  //   connect to database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log("Error", error);
  }
};   

export default connectDB;
