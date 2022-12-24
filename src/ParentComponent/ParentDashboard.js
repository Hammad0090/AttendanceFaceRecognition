import React from "react";
import StudentNavBar from "./ParentNavBar";
import ViewChild from "./ViewChild";
import StuAttendance from "./StuAttendance";
// import { withRouter } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// const SlottimeStudentsWithRouter = withRouter(SlottimeStudents);

global.imageUrl = "http://localhost:52695/photos/";
function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <StudentNavBar />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<ViewChild />} />
            <Route path="/StuAttendance" element={<StuAttendance />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
