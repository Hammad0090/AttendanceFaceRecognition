import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./TeacherStyles.css";

//to get data from previous view
import { useLocation } from "react-router-dom";
function SlottimeStudents() {
  const [active, setActive] = useState(false);
  const [students, setStudents] = useState([]);
  //to get data make variable of useLocation
  const location = useLocation();
  //to get data access the state value from useLocation object
  const state = location.state;
  // alert(state);

  useEffect(() => {
    axios
      .get(
        `${global.apipath}/GetStudent?section=${state.title}&course=${state.CourseName}`
      )
      .then((res) => {
        const students = res.data;
        let arr = [];
        for (let i = 0; i < students.length; i++) {
          arr.push({ ...students[i], status: "P" });
        }
        setStudents(arr);
        // alert(JSON.stringify(students));
      });
  }, []);

  async function submitAttendance() {
    let arr = [];
    for (let i = 0; i < students.length; i++) {
      arr.push({
        AridNo: students[i].Regno,
        Status: students[i].status,
      });
    }
    let response = await fetch(
      `${global.apipath}/getAttendencestatus?date=2022-11-08&timetable=1&coursecode=cs-101&tid=emp-101`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(arr),
      }
    );
    let json = await response.json();
    alert(json);
  }

  function handlePresent(std) {
    let arr = [];
    for (let i = 0; i < students.length; i++) {
      if (std.Regno === students[i].Regno) {
        std.status = std.status === "P" ? "A" : "P";
        setActive(!active);
        arr.push(std);
      } else {
        arr.push({ ...students[i] });
      }
    }
    setStudents(arr);
    // alert(`Student is Present ${JSON.stringify(std)}`);
  }

  // Absent(){
  //   Alert("Student is absent");
  // };

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <div>
            <h1>LT-7</h1>
          </div>
          <div style={{ marginLeft: 200 }}>
            {" "}
            <div className="camra">
              <i className="bi bi-camera"></i>
            </div>
            <Button
              variant="flat"
              size="xxl"
              onClick={() => {
                submitAttendance();
              }}
            >
              Select All
            </Button>
          </div>
          <br />
          {students.map((student) => (
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item borderless">
                <div>
                  <img
                    width="80px"
                    height="80px"
                    src={`${global.imageUrl}/paul.jpg`}
                    alt=""
                    border="0px"
                  />
                </div>
              </li>
              <li className="list-group-item borderless">
                <div>
                  {student.Regno}
                  <br></br> {student.FullName}
                  <br></br> {student.title} |{student.CourseName}
                  <div className="bttnshow">
                    <Button
                      // className="mr-2"
                      variant={active ? "danger" : "success"}
                      // variant="success"
                      onClick={() => handlePresent(student)}
                    >
                      {student.status}
                    </Button>
                    {student.Status}
                  </div>
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
export default SlottimeStudents;
