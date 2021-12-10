import mongoose from "mongoose";
//create a mongoDB Schema
const ResultSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("example", ResultSchema);
