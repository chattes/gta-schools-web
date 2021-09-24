import React, { useState, useContext, useEffect, createContext } from "react";
import { searchSchools } from "../Api";

const APISchoolsContext = createContext([]);

export const ApiSchoolsContextProvider = ({ children }) => {
  const [schools, setSchools] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const fetchSchools = async (name) => {
    setIsFetching(true);
    const schools = await searchSchools(name);
    setSchools(schools);
    setIsFetching(false);
  };
  return (
    <APISchoolsContext.Provider value={{ schools, isFetching, fetchSchools }}>
      {children}
    </APISchoolsContext.Provider>
  );
};

export const useApiSchool = () => {
  const context = useContext(APISchoolsContext);
  if (context === undefined)
    throw new Error("Context has not been defined in the Provider");
  return context;
};
