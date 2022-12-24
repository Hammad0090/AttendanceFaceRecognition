import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function ViewChild() {
  //create state getStudentCourses
  const [ViewChild, setViewChild] = useState([]);
  // //to get data make variable of useLocation
  // const location = useLocation();
  // //to get data access the state value from useLocation object
  // const state = location.state;
  // alert(state);
  useEffect(() => {
    axios.get(`${global.apipath}/GetParentView`).then((result) => {
      const ViewChild = result.data;
      setViewChild(ViewChild);
    });
  }, []);

  return (
    <>
      <div>
        <h1>Childs</h1>
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
        <ul className="list-group">
          {ViewChild.map((item) => (
            <li className="list-group-item" key={item.id} style={styles}>
              {item.FullName} : {item.title}
              <Link to="/StuAttendance" state={item}>
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

export default ViewChild;

// Some styling for the items
const styles = {
  backgroundColor: "white",
  width: "990px",
  marginBottom: "40px",
  padding: "5px",
  color: "green",
  boxShadow: "rgb(0,0,0,0.44) 0px 5px 5px",
};
