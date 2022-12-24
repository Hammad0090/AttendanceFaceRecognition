import React from "react";
import StudentNavBar from "./StudentNavBar";
import StudentSubject from "./StudentSubject";
import Challenge from "./Challenge";
// import { withRouter } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// const SlottimeStudentsWithRouter = withRouter(SlottimeStudents);

function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <StudentNavBar />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<StudentSubject />} />
            <Route path="/studentsubject" element={<StudentSubject />} />
            <Route path="/challenges" element={<Challenge />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
