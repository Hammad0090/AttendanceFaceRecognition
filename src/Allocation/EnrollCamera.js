import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Row, Col, Form, Image } from "react-bootstrap";
import "./mobilestyle.css";
import imagesrc from "../Images/biit.jpg";

//to get data from previous view
import { useLocation } from "react-router-dom";
function SlottimeStudents() {
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
        setStudents(students);
        // alert(JSON.stringify(students));
      });
  }, []);

  function handlePresent() {
    alert(`Student is Present ${JSON.stringify(state)}`);
  }

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Absent(){
  //   Alert("Student is absent");
  // };
  const handleFileSelected = () => {
    alert("image save");
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Camera Picture</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Row>
            <Col sm={6}>
              <Image width="200px" height="200px" src={imagesrc} />
              <input onChange={handleFileSelected} type="File" />
            </Col>
          </Row>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
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
          <div>
            <h1>LT-7</h1>
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
                  <br></br> {student.Firstname}
                  <br></br> {student.title} |{student.CourseName}
                  <div className="bttnshow">
                    <Button
                      className="mr-2"
                      variant="success"
                      onClick={handleShow}
                    >
                      Enroll
                    </Button>
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

// // alert(this.props.location);
// const styles = {
//   height: "90px",
//   backgroundColor: "white",
//   width: "567px",
//   marginBottom: "10px",
//   color: "black",
//   boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
// };
