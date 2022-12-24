import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./TeacherStyles.css";

//to get data from previous view
import { useLocation } from "react-router-dom";
function SlottimeStudents() {
  const [students, setStudents] = useState([]);
  //to get data make variable of useLocation
  const location = useLocation();
  //to get data access the state value from useLocation object
  const state = location.state;
  useEffect(() => {
    axios.get(`${global.apipath}GetAllCourses`).then((res) => {
      const students = res.data;
      setStudents(students);
      // alert(JSON.stringify(students));
    });
  }, []);

  function handlePresent() {
    alert(`Student is Present ${JSON.stringify(state)}`);
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
      <div>
        <div>
          <h1>LT-7</h1>
        </div>
        <div style={{ marginLeft: 435 }}>
          {" "}
          <div className="camra">
            <i className="bi bi-camera"></i>
          </div>
          <Button variant="flat" size="xxl">
            Select All
          </Button>
        </div>
        <br />

        {students.map((student) => (
          <ul className="list-group list-group-horizontal" style={styles}>
            <li className="list-group-item borderless">
              <div>
                <img
                  width="50px"
                  height="50px"
                  src={`${global.imageUrl}/${student.LecturePhoto}`}
                  alt=""
                  border="0px"
                />
              </div>
            </li>
            <li className="list-group-item borderless">
              <div>
                {student.cid}
                <br></br> {student.cname}
              </div>
            </li>
            <li className="list-group-item borderless">
              <div className="ClassLT"> {student.chour}</div>
            </li>
            <li className="list-group-item">
              <div className="Percentg">
                <label>85%</label>
              </div>
            </li>
            <li className="list-group-item border-right-0">
              <div className="bttnshow">
                <Button
                  className="mr-2"
                  variant="success"
                  onClick={handlePresent}
                >
                  P
                </Button>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default SlottimeStudents;

// alert(this.props.location);
const styles = {
  height: "90px",
  backgroundColor: "white",
  width: "527px",
  marginBottom: "10px",
  color: "black",
  boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
};
