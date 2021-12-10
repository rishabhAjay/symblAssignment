import express from "express";
import connectDB from "./middleware/db.js";
import ExampleData from "./routes/ExampleData.js";
//create the connection
connectDB();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

//define routes
app.use("/example/get-data", ExampleData);

app.listen(PORT, () => {
  console.log(`listening at port ${PORT}`);
});
