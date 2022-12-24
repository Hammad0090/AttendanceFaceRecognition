import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import axios from "axios";
import img1 from "../Images/biit.jpg";
import CoursesToTech from "../TeacherComponent/Allocate";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function App() {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleNameChange = (value) => {
    setusername(value);
  };
  const handlePhoneChange = (value) => {
    setpassword(value);
  };

  const handleLogin = () => {
    const data = {
      Username: username,
      Password: password,
    };
    axios
      .post(`${global.apipath}/CheckLogin`, data)
      .then((result) => {
        alert(result.data);
        alert(result.data.Role);
        localStorage.setItem("token", result.data.token);
        navigate("/course");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <MDBContainer className="my-5 gradient-form">
      <MDBRow>
        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column ms-9">
            <div className="text-center">
              <img src={img1} style={{ width: "185px" }} alt="logo" />
              <h4 className="mt-1 mb-5 pb-1">Attendance system</h4>
            </div>

            <p>Please login to your account</p>

            <MDBInput
              wrapperClass="mb-4"
              label="User name"
              id="textName"
              type="text"
              onChange={(e) => handleNameChange(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="textpassword"
              type="password"
              onChange={(e) => handlePhoneChange(e.target.value)}
            />

            <div className="text-center pt-1 mb-5 pb-1">
              <MDBBtn
                className="mb-4 w-100 gradient-custom-2"
                onClick={() => handleLogin()}
              >
                Sign in
              </MDBBtn>
            </div>
          </div>
        </MDBCol>

        <MDBCol col="6" className="mb-5">
          <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
            <div className="text-white px-3 py-4 p-md-5 mx-md-4">
              <h4 className="mb-4">Biit Attendance System</h4>
              <p className="small mb-0">
                Student attendance system helps teachers to mark online
                attendance of students during class & reduce manual work. It is
                used to track student's attendance, absentee record, attendance
                history & other related documents.
              </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
