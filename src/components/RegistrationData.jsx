import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RegistrationData = () => {
  const received = useLocation();
  console.log(received.state);
  const [alldata, setAlldata] = useState([]);
  // console.log(alldata);
  useEffect(() => {
    setAlldata([...alldata, received.state]);
  }, []);
  return (
    <div>
      <h1>Details</h1>
      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gmail</th>
          <th>Contact Number</th>
          <th>Country</th>
          <th>Password</th>
          <th>Confirm Password</th>
          <th>Address</th>
          <th>DOB</th>
        </tr>
      </table>
      {alldata.length > 0 &&
        alldata.map((item) => {
          console.log("=====>", item);
          return (
            <div>
              {/* <h1>{item.firstName && item.firstName}</h1> */}

              {/* <h1>{item.firstName}</h1> */}
            </div>
          );
        })}
    </div>
  );
};
