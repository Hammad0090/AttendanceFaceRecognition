import React, { useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useEffect } from "react";

function Challenge() {
  const [StuCourse, setStuCourse] = useState([]);
  // //to get data make variable of useLocation
  // const location = useLocation();
  // //to get data access the state value from useLocation object
  // const state = location.state;
  // alert(state);
  useEffect(() => {
    axios.get(`${global.apipath}/GetStudentAttendance`).then((result) => {
      const StuCourse = result.data;
      setStuCourse(StuCourse);
    });
  }, []);

  function handleChallenge() {
    alert(`Your Notification Send to Teacher`);
    <div className="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>;
  }

  return (
    <>
      <style type="text/css">
        {`
.btn-flat {
background-color: purple;
color: white;

}

.btn-xxl {
padding: 1rem 1.5rem;
font-size: 0.5rem;
}
`}
      </style>
      <div>
        <h1> Date/Day</h1>

        <table className="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Day</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Subject</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {StuCourse.map((item) => (
            <tbody key={item.id}>
              <tr>
                <th scope="row">1</th>
                <td>{item.Day}</td>
                <td>{item.Date}</td>
                <td>{item.Slot}</td>
                <td>{item.CourseName}</td>
                <td>{item.Status}</td>
                <td>
                  <Button
                    variant="flat"
                    size="xxl"
                    style={{ float: "center" }}
                    onClick={handleChallenge}
                  >
                    Challenge
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

export default Challenge;
