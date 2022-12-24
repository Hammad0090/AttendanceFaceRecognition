import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../Images/noti.gif";
import axios from "axios";
import { useEffect } from "react";

function Challenge() {
  //create state getStudentCourses
  const [StuCourse, setStuCourse] = useState([]);
  // //to get data make variable of useLocation
  // const location = useLocation();
  // //to get data access the state value from useLocation object
  // const state = location.state;
  // alert(state);
  useEffect(() => {
    axios.get(`${global.apipath}/GetStudentCourses`).then((result) => {
      const StuCourse = result.data;
      setStuCourse(StuCourse);
    });
  }, []);

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div>
        <h1>Subjects</h1>
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
          <img
            width="40px"
            height="40px"
            src={img1}
            alt=""
            border="0px"
            onClick={handleShow}
            style={{ marginLeft: 940, marginTop: -10 }}
          />
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notifications</Modal.Title>
          </Modal.Header>
          <div className="alert alert-primary" role="alert">
            You were late Ali!
          </div>
          <div className="alert alert-danger" role="alert">
            Your Attendance below 75%
          </div>
          <div className="alert alert-success" role="alert">
            Notification 3
          </div>
          <div className="alert alert-danger" role="alert">
            Notification 3
          </div>
          <div className="alert alert-warning" role="alert">
            Notification 4
          </div>
          <div className="alert alert-info" role="alert">
            Notification 5
          </div>
          <div className="alert alert-light" role="alert">
            Notification 6
          </div>
          <div className="alert alert-dark" role="alert">
            Notification 7
          </div>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <br />

        <ul className="list-group">
          {StuCourse.map((item) => (
            <li className="list-group-item" key={item.id} style={styles}>
              {item.CourseName}
              <Link to="/challenges" state={item}>
                <Button variant="flat" size="xxl" style={{ float: "right" }}>
                  Show
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Challenge;

// Some styling for the items
const styles = {
  backgroundColor: "white",
  width: "990px",
  marginBottom: "40px",
  padding: "5px",
  color: "green",
  boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
};
