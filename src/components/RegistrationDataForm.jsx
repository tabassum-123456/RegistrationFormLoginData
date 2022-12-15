import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RegistrationDataForm = () => {
  const [alldata, setAlldata] = useState([]);
  const received = useLocation();
  console.log(received.state);

  useEffect(() => {
    const data = localStorage.getItem("personalData");
    const newData = JSON.parse(data);
    setAlldata(newData);
  }, []);

  return (
    <div>
      <h1>Details of Registration</h1>
      {alldata.map((item) => (
        <React.Fragment>
          <h3>
            {item.firstName} {item.lastName}
          </h3>
          <p>{item.email}</p>
          <p>{item.contact}</p>
        </React.Fragment>
      ))}
    </div>
  );
};
