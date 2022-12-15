import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RegistrationData } from "./RegistrationData";
import { RegistrationDataForm } from "./RegistrationDataForm";
import { RegistrationForm } from "./RegistrationForm";

export const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/registration" element={<RegistrationDataForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
