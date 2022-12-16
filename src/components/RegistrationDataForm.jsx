import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const RegistrationDataForm = () => {
  const [alldata, setAlldata] = useState([]);
  const received = useLocation();
  console.log(received.state);
  const handledel = (ind) => {
    const filtered = alldata.filter((elem, i) => i !== ind);
    setAlldata(filtered);
    localStorage.setItem("personalData", JSON.stringify(filtered));
  };

  useEffect(() => {
    const data = localStorage.getItem("personalData");
    const newData = JSON.parse(data);
    setAlldata(newData);
  }, []);

  return (
    <div>
      <table border={3}>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gmail</th>
          <th>Contact Number</th>
          <th>Password</th>
          <th>Confirm Password</th>
          <th>Country</th>
          <th>Address</th>
        </tr>

        {alldata.map((item, ind) => (
          <React.Fragment>
            <tr>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.contact}</td>
              <td>{item.password}</td>
              <td>{item.confirmPassword}</td>
              <td>{item.country}</td>
              <td>{item.address}</td>
              <button onClick={() => handledel(ind)}>Delete</button>

              {/* <button onChange={()=>handleUpdate()}>update</button> */}
            </tr>
          </React.Fragment>
        ))}
      </table>
    </div>
  );
};
