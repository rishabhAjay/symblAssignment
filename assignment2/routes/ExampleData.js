import express from "express";
import Example from "../models/Example.js";

const router = express.Router();

/*
route: /example/get-data
method: GET
description: get the example data
access: public
*/

router.get("/", async (req, res) => {
  try {
    let data = await Example.find().select("-_id");
    //send in the JSON response.
    res.json(data);
    //sort the returned array of objects by id
    data = data.sort((a, b) => {
      return a.id - b.id;
    });
    //map through the sorted array and console log ele
    data.map((ele) => {
      console.log(`ID: ${ele.id}, NAME: ${ele.name}`);
    });
  } catch (err) {
    //catch errors
    console.log(err);
    res.status(500).send("Server error");
  }
});

/*
route: /example/get-data
method: POST
description: create example data
access: public
*/

router.post("/", async (req, res) => {
  //add new objects to the array
  const { id, name } = req.body;
  try {
    const newData = new Example({
      id,
      name,
    });
    const data = await newData.save();
    res.json(data);
  } catch (err) {
    //catch errors
    console.log(err.message);
    res.status(500).send("Server error");
  }
});

export default router;
