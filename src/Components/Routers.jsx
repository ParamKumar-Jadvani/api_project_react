import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Form from "../Pages/Form";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        {/* <Route path="/product/:id" element={} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
};

export default Routers;
