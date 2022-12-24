import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
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
    axios.get(`${global.apipath}GetSubjectAndSection`).then((res) => {
      const LectureSlot = res.data;
      setLectureSlot(LectureSlot);
      // alert(JSON.stringify(students));
    });
  }, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
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
          <div></div>
          <br></br>
          <ul className="list-group">
            {LectureSlot.map((item) => (
              <li className="list-group-item" key={item.id} style={styles}>
                {item.title} | {item.CourseName}
                <Link to="/enrollcamera" state={item}>
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
