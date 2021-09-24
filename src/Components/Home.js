import React, { useState, useEffect } from "react";
import { useApiSchool } from "../Context/Schools";
import School from "../Components/School";
export const Home = () => {
  const [name, setName] = useState("");
  const [placeHolder, setPlaceHolder] = useState("school name?");
  const [animateInterval, setAnimateInterval] = useState(null);
  const { schools, isFetching, fetchSchools } = useApiSchool();
  const exampleNames = ["rosedale", "blythwood", "george webster", "selwyn"];
  useEffect(() => {
    const intervalId = setInterval(() => {
      let index = Math.floor(Math.random() * (3 - 0) + 0);
      let schoolPlaceholder = exampleNames[index];
      setPlaceHolder(schoolPlaceholder);
    }, 2000);
    setAnimateInterval(intervalId);
  }, []);
  const search = async () => {
    fetchSchools(name);
  };
  console.log(isFetching);
  console.log(schools);
  return (
    <div className="container mt-5 mb-2">
      {/* search row */}
      <div className="row">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <input
            type="text"
            className="form-control search-types"
            placeholder={placeHolder}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onFocus={() => {
              clearInterval(animateInterval);
              setAnimateInterval(null);
              setPlaceHolder("school name?");
            }}
          />
        </div>
        <div className="col-sm-4"></div>
      </div>
      {/* Button Row */}
      <div className="mt-4 row">
        <div className="col-sm-4 col-md-4"></div>
        <div className="col-sm-4 col-md-4">
          <button
            type="button"
            className="w-100 btn btn-primary fw-bold"
            onClick={search}
          >
            Find
          </button>
        </div>
        <div className="col-sm-4 col-md-4"></div>
      </div>

      {/* result row */}

      <div className="row mt-5">
        {isFetching ? <p>Loading</p> : <School schools={schools} />}
      </div>
    </div>
  );
};

export default Home;
