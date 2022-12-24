import React, { useEffect, useState } from "react";
import { Button, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";

function Allocate() {
  //create dummy list
  // const items = [
  //   // { id: 1, slottime: "8:30-10:00", sub: "DSA", sec: "BCS-7A", class: "LT-7" },
  //   // { id: 1, slottime: "8:30-10:00", sub: "DSA", sec: "BCS-7A", class: "LT-7" },
  //   // { id: 2, slottime: "11:30-1:00", sub: "VSS", sec: "BIT-7B", class: "LT-3" },
  //   // { id: 3, slottime: "1:30-300", sub: "CC", sec: "BCS-7B", class: "LT-9" },
  //   // { id: 3, slottime: "3:00-4:30", sub: "AA", sec: "BIT-7B", class: "LT-3" },
  // ];

  //Create state and get data from APi
  const [LectureSlot, setLectureSlot] = useState([]);
  useEffect(() => {
    axios.get(`${global.apipath}TeacherTimeTable`).then((res) => {
      const LectureSlot = res.data;
      setLectureSlot(LectureSlot);
      // alert(JSON.stringify(students));
    });
  }, []);

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
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Monday
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="">Tuesday</Dropdown.Item>
              <Dropdown.Item href="">Wednesday</Dropdown.Item>
              <Dropdown.Item href="">thursday</Dropdown.Item>
              <Dropdown.Item href="">Friday</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <br />
          <div className="Calender">
            <Form.Control
              type="date"
              name="DateOfJoining"
              required
              placeholder="Select Date"
            />
          </div>
          <br></br>
          <ul className="list-group">
            {LectureSlot.map((item) => (
              <li className="list-group-item" key={item.id} style={styles}>
                {item.Slot} : {item.Venue} : {item.title} : {item.CourseName}
                <Link to="/slottimeStudent" state={item}>
                  <Button variant="flat" size="xxl" style={{ float: "right" }}>
                    Show
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Allocate;

// Some styling for the items
const styles = {
  backgroundColor: "white",
  width: "350px",
  marginBottom: "40px",
  padding: "10px",
  color: "green",
  boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
};
