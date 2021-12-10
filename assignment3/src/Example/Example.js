import React, { useState, useEffect } from "react";
import Styles from "./Example.module.css";
import axios from "axios";

const Example = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const getData = async () => {
    try {
      //get the array of objects from the fake REST server
      const res = await axios.get("http://localhost:5000/data");
      //fill the data state with the sorted array of objects
      setData(
        res.data.sort((a, b) => {
          return a.id - b.id;
        })
      );
    } catch (err) {
      setError("An Error occurred..");
      console.log(err);
    }
  };

  //run the above function once before any component renders in useEffect hook
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={Styles.exampleDiv}>
      {/* if no errors are found then map through the data state. Otherwise print the error */}
      {error === "" ? (
        data.map((ele) => (
          <div className={Styles.exampleList}>
            <h3>
              ID:{ele.id} : {ele.name}{" "}
            </h3>
          </div>
        ))
      ) : (
        <h4>{error}</h4>
      )}
    </div>
  );
};

export default Example;
