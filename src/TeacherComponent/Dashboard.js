import React from "react";
import Navbar from "./Navbar";
import Notification from "./Notificaton";
import Allocate from "./Allocate";
import AttendanceSetting from "./AttendanceSetting";
import SlottimeStudents from "./SlottimeStudents";
// import { withRouter } from "react-router";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { withRouter } from "react-router-dom";

// const SlottimeStudentsWithRouter = withRouter(SlottimeStudents);

global.imageUrl = "http://192.168.111.140/AttendanceSystem/Photos/";
global.apipath = "http://192.168.111.140/AttendanceSystem/api/Attendance/";
function Dashboard() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container my-3">
          <Routes>
            <Route path="/" element={<Notification />} />
            <Route path="/allocate" element={<Allocate />} />
            <Route path="/attsetting" element={<AttendanceSetting />} />
            <Route path="/slottimeStudent" element={<SlottimeStudents />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
