import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connection = process.env.MONGO_URL;

//code to connect to the cloud DB
const connectDB = async () => {
  try {
    await mongoose.connect(connection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDB;
