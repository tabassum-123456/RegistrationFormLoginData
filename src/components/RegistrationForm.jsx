import React, { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { InputFields } from "./InputFields";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { CheckBox } from "@mui/icons-material";
import { TextField } from "@mui/material";
import Select from "react-select";
import { countries } from "../constants/countries";

export const RegistrationForm = () => {
  const phonenumber =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\]?[0-9]{3}[-\s\]?[0-9]{4,6}$/im;
  const validate = Yup.object({
    firstName: Yup.string()
      .min(3, "Must be 3 characters or less")
      .max(16, "Must be 16 characters or less")
      .required("Required *"),
    lastName: Yup.string()
      .min(3, "Must be 3 characters or less")
      .max(16, "Must be 16 characters or less")
      .required("Required *"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    contact: Yup.string()
      .min(10, "Enter valid mobile number")
      .required("Phone number is required *")
      .matches(phonenumber, "Invalid mobile number"),
    password: Yup.string()
      .min(6, "Password must be at least 6 charaters")
      .required("Password is required *"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required *"),
  });
  const [alldata, setAlldata] = useState([]);
  const [dob, setDob] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    const newData = alldata;
    newData.push(values);
    console.log(newData);
    setAlldata(newData);
    localStorage.setItem("personalData", JSON.stringify(newData));
    navigate("/registration", { state: values });
  };

  useEffect(() => {
    const data = localStorage.getItem("personalData");
    const newData = JSON.parse(data);
    setAlldata(newData);
  }, []);
  return (
    <Formik
      initialValues={{
        firstName: "Sumit",
        lastName: "Singh",
        email: "sumit@gmail.com",
        contact: "9787897899",
        password: "888822",
        confirmPassword: "888822",
      }}
      validationSchema={validate}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Form style={{ width: "20rem" }}>
            <InputFields label="First Name" name="firstName" type="text" />
            <InputFields label="last Name" name="lastName" type="text" />
            <InputFields label="Email" name="email" type="email" />
            <InputFields label="Contact" name="contact" type="" />
            <Select options={countries} />
            <InputFields label="password" name="password" type="password" />
            <InputFields
              label="Confirm Password"
              name="confirmPassword"
              type="password"
            />
            <InputFields label="Address" name="Address" type="text" />
            <TextField type="date" onChange={() => setDob()} />
            <InputFields label="Agree" name="Agree" type="checkbox" />
            <button
              className="btn btn-dark mt-3"
              type="submit"
              // disabled={!(formik.isValid && formik.dirty)}
            >
              Submit
            </button>
            <button className="btn btn-danger mt-3 ml-3" type="reset">
              Reset
            </button>
          </Form>
        </div>
      )}
    </Formik>
  );
};
