import React from "react";
import AllocationNavBar from "./AllocationNavBar";
import CoursesToTech from "./CoursesToTeacher";
import Enrollcamera from "./EnrollCamera";
// import { withRouter } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <AllocationNavBar />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<CoursesToTech />} />
            <Route path="/enrollcamera" element={<Enrollcamera />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
